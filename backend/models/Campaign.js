const mongoose = require("mongoose");


const campaignSchema = new mongoose.Schema({
name: { type: String, required: true },
source: { type: String, enum: ["Meta", "Google", "Website"], required: true },
startDate: { type: Date },
endDate: { type: Date },
budget: { type: Number },
createdAt: { type: Date, default: Date.now },
});


module.exports = mongoose.model("Campaign", campaignSchema);