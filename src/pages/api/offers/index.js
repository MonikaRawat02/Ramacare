import axios from 'axios'

export default async function handler(
  req,
  res,
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res
      .status(405)
      .json({ success: false, message: "Method Not Allowed" });
  }

  const payload = req.body || {};

  try {
    // Also send to external API
    const ramacareLeadData = {
      name: payload.fullName,
      phone: payload.phone,
      email: payload.email,
      userEmail: "ramaclinicdubai@gmail.com",
      additionalInfo: payload.additionalInfo
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
