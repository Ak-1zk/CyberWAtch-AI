const mongoose = require("mongoose");

const scanSchema = new mongoose.Schema({
  userId: String,
  input: Object,
  risk: String,
  score: Number,
  reasons: [String],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("ScanResult", scanSchema);
