import mongoose from "mongoose";

const AppointmentSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    concern: {
      type: String,
      trim: true,
    },
    additionalInfo: {
      type: String,
      trim: true,
    },
    preferredDate: {
      type: Date,
    },
    source: {
      type: String,
      default: "website",
    },
    status: {
      type: String,
      enum: ["new", "contacted", "scheduled", "completed", "cancelled"],
      default: "new",
    },
    notes: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

// Index for faster queries
AppointmentSchema.index({ createdAt: -1 });
AppointmentSchema.index({ status: 1 });
AppointmentSchema.index({ email: 1 });

export default mongoose.models.Appointment || mongoose.model("Appointment", AppointmentSchema);