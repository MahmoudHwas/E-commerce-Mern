const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const router = require("./routes");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
}));
app.use(express.json());
app.use(cookieParser());
app.use("/api", router);

// Connect to DB (optional: wrap in a condition for serverless)
connectDB().then(() => {
    console.log("Database connected successfully");
}).catch(err => {
    console.error("Database connection failed:", err);
});

// Export the app for Vercel
module.exports = app; // بدل app.listen