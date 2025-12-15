const Lead = require("../models/Lead");

// Get all leads
exports.getLeads = async (req, res) => {
  try {
    const leads = await Lead.find().sort({ createdAt: -1 });
    res.status(200).json(leads);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


exports.addLead = async (req, res) => {
  try {
    const { name, email, phone, source, campaign, service } = req.body;
    if (!name || !email || !phone || !source) {
      return res.status(400).json({ error: "All required fields are mandatory" });
    }

    const newLead = new Lead({ name, email, phone, source, campaign, service });
    await newLead.save();
    res.status(201).json(newLead);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
