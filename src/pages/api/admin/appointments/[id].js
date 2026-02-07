import dbConnect from "../../../../../lib/database";
import Appointment from "../../../../../models/appointment";
import User from "../../../../../models/user";
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
  const { method } = req;
  const { id } = req.query;

  await dbConnect();

  // Authentication
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "No token provided" });
  }

  const token = authHeader.split(" ")[1];
  let user;

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    user = await User.findById(decoded.userId).select("-password");
    if (!user || user.role !== "admin") {
      return res.status(403).json({ message: "Access denied" });
    }
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }

  switch (method) {
    case "GET":
      try {
        if (id) {
          // Get single appointment
          const appointment = await Appointment.findById(id)
            .select("fullName phone email concern additionalInfo status createdAt preferredDate source notes");
          if (!appointment) {
            return res.status(404).json({ success: false, message: "Appointment not found" });
          }
          return res.status(200).json({ success: true, appointment });
        } else {
          // Get all appointments with filters
          const { status, limit = 50, page = 1 } = req.query;
          
          let query = {};
          if (status && status !== 'all') {
            query.status = status;
          }

          const skip = (page - 1) * limit;
          
          const [appointments, total] = await Promise.all([
            Appointment.find(query)
              .sort({ createdAt: -1 })
              .skip(skip)
              .limit(parseInt(limit))
              .select("fullName phone email concern additionalInfo status createdAt preferredDate source notes"),
            Appointment.countDocuments(query)
          ]);

          return res.status(200).json({
            success: true,
            appointments,
            pagination: {
              total,
              page: parseInt(page),
              limit: parseInt(limit),
              pages: Math.ceil(total / limit)
            }
          });
        }
      } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
      }

    case "PUT":
      try {
        if (!id) {
          return res.status(400).json({ success: false, message: "Appointment ID required" });
        }

        const { status, notes } = req.body;
        
        // Validate status
        const validStatuses = ["new", "contacted", "scheduled", "completed", "cancelled"];
        if (status && !validStatuses.includes(status)) {
          return res.status(400).json({ 
            success: false, 
            message: "Invalid status. Must be one of: " + validStatuses.join(", ") 
          });
        }

        const updateData = {};
        if (status) updateData.status = status;
        if (notes !== undefined) updateData.notes = notes;

        const updatedAppointment = await Appointment.findByIdAndUpdate(
          id,
          updateData,
          { new: true, runValidators: true }
        );

        if (!updatedAppointment) {
          return res.status(404).json({ success: false, message: "Appointment not found" });
        }

        return res.status(200).json({ 
          success: true, 
          appointment: updatedAppointment,
          message: "Appointment updated successfully"
        });
      } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
      }

    case "DELETE":
      try {
        if (!id) {
          return res.status(400).json({ success: false, message: "Appointment ID required" });
        }

        const deletedAppointment = await Appointment.findByIdAndDelete(id);
        
        if (!deletedAppointment) {
          return res.status(404).json({ success: false, message: "Appointment not found" });
        }

        return res.status(200).json({ 
          success: true, 
          message: "Appointment deleted successfully"
        });
      } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
      }

    default:
      res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
      return res.status(405).json({ success: false, message: `Method ${method} not allowed` });
  }
}