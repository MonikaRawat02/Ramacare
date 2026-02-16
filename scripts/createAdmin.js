import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import User from "../models/user.js"; // adjust path if needed

/* -------------------- CONFIG -------------------- */
const username = "arohigupta367_db_user";
const password = encodeURIComponent("D6LNTIBuPBh6J0tq@");

const MONGODB_URI = `mongodb+srv://${username}:${password}@ramacare.epkilde.mongodb.net/ramacare`;



const ADMIN_DATA = {
  name: "Dilip",
  email: "diglip@gmail.com",
  password: "Admin@123", // 👈 plain password (only here)
  role: "admin",
};

/* -------------------- SCRIPT -------------------- */
async function createAdmin() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("✅ MongoDB connected");

    // Check if admin already exists
    const existingAdmin = await User.findOne({ email: ADMIN_DATA.email });
    if (existingAdmin) {
      console.log("⚠️ Admin already exists");
      process.exit(0);
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(ADMIN_DATA.password, 10);

    const adminUser = new User({
      name: ADMIN_DATA.name,
      username: ADMIN_DATA.username,
      email: ADMIN_DATA.email,
      password: hashedPassword,
      role: "admin",
    });

    await adminUser.save();

    console.log("🎉 Admin user created successfully");
    console.log("📧 Email:", ADMIN_DATA.email);
    console.log("🔑 Password (plain):", ADMIN_DATA.password);
    console.log("🔐 Hashed Password:", hashedPassword);

    process.exit(0);
  } catch (error) {
    console.error("❌ Error creating admin:", error);
    process.exit(1);
  }
}

createAdmin();