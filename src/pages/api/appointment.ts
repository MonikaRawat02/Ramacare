import type { NextApiRequest, NextApiResponse } from "next";
import axios from 'axios'
import dbConnect from "../../../lib/database";
import Appointment from "../../../models/appointment";

type ApiResponse = {
  success: boolean;
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse>,
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res
      .status(405)
      .json({ success: false, message: "Method Not Allowed" });
  }

  const payload = req.body || {};

  console.log("[Appointment Submission]", {
    source: payload?.source,
    action: payload?.action,
    timestamp: new Date().toISOString(),
    data: payload,
  });

  try {
    // Save to MongoDB
    await dbConnect();
    
    const appointmentData = {
      fullName: payload?.fullName || payload?.name,
      phone: payload?.phone,
      email: payload?.email,
      concern: payload?.concern || payload?.treatment,
      additionalInfo: payload?.additionalInfo || payload?.message,
      preferredDate: payload?.preferredDate ? new Date(payload.preferredDate) : null,
      source: payload?.source || "website",
      status: "new"
    };

    // Validate required fields
    if (!appointmentData.fullName || !appointmentData.phone || !appointmentData.email) {
      return res.status(400).json({ 
        success: false, 
        message: "Full name, phone, and email are required" 
      });
    }
  
    const newAppointment = new Appointment(appointmentData);
    await newAppointment.save();
    
    console.log("[Appointment Saved to DB]", newAppointment._id);

    // Also send to external API
    const ramacareLeadData = {
      name: appointmentData.fullName,
      userEmail: "ramaclinicdubai@gmail.com",
      ...payload
    };

    if(ramacareLeadData?.phone && ramacareLeadData?.name){
      try {
        const {data} = await axios.post("https://zeva360.com/api/lead-ms/ramacare/import-lead", ramacareLeadData);
        console.log("[Lead Import Response]", {data});
      } catch (err) {
        console.error("[Lead Import Error]", err);
        // Don't fail the request if external API fails
      }
    }

    return res
      .status(201)
      .json({ success: true, message: "Appointment request submitted successfully" });

  } catch (error) {
    console.error("[Appointment API Error]", error);
    return res
      .status(500)
      .json({ success: false, message: "Failed to process appointment request" });
  }
}
