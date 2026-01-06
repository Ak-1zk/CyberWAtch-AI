const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

// 🔗 Connect to MongoDB
connectDB();

// Middlewares
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("CyberWatch AI Backend + MongoDB connected ✅");
});

module.exports = app;