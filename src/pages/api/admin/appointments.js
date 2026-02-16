import dbConnect from "../../../../lib/database";
import Appointment from "../../../../models/appointment";
import User from "../../../../models/user";
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    await dbConnect();

    // Authentication
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "No token provided" });
    }

    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.userId).select("-password");

    if (!user || user.role !== "admin") {
      return res.status(403).json({ message: "Access denied" });
    }

    // Get recent appointments (last 10)
    const recentAppointments = await Appointment.find()
      .sort({ createdAt: -1 })
      .limit(10)
      .select("fullName phone email concern additionalInfo status createdAt notes preferredDate source");

    // Get statistics
    const [
      totalAppointments,
      newAppointments,
      contactedAppointments,
      scheduledAppointments
    ] = await Promise.all([
      Appointment.countDocuments(),
      Appointment.countDocuments({ status: "new" }),
      Appointment.countDocuments({ status: "contacted" }),
      Appointment.countDocuments({ status: "scheduled" })
    ]);

    const stats = {
      total: totalAppointments,
      new: newAppointments,
      contacted: contactedAppointments,
      scheduled: scheduledAppointments
    };

    res.status(200).json({
      success: true,
      appointments: recentAppointments,
      stats
    });

  } catch (error) {
    console.error("Appointments API Error:", error);
    return res.status(500).json({ 
      success: false, 
      message: error.message 
    });
  }
}