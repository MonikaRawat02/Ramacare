import dbConnect from "../../../../lib/database";
import Appointment from "../../../../models/appointment";
import User from "../../../../models/user";
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
  if (req.method !== "GET" && req.method !== "DELETE") {
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

    if (req.method === "DELETE") {
      const { type, ids, dateRange } = req.body;

      if (type === "selected" && Array.isArray(ids)) {
        await Appointment.deleteMany({ _id: { $in: ids } });
        return res.status(200).json({ success: true, message: "Selected appointments deleted" });
      }

      if (type === "dateRange" && dateRange?.start && dateRange?.end) {
        await Appointment.deleteMany({
          createdAt: {
            $gte: new Date(dateRange.start),
            $lte: new Date(dateRange.end)
          }
        });
        return res.status(200).json({ success: true, message: "Appointments in date range deleted" });
      }

      return res.status(400).json({ success: false, message: "Invalid delete parameters" });
    }

    // Get all appointments
    const allAppointments = await Appointment.find()
      .sort({ createdAt: -1 })
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
      appointments: allAppointments,
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