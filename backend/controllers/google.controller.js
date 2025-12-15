const Lead = require("../models/Lead");


exports.fetchGoogleLeads = async (req, res) => {
  try {
    const dummyLead = {
      name: "Google User",
      email: `googleuser${Date.now()}@example.com`,
      phone: `888${Math.floor(1000000 + Math.random() * 9000000)}`,
      source: "Google",
      campaign: "Google Campaign",
      service: "SEO"
    };

    const newLead = new Lead(dummyLead);
    await newLead.save();

    res.status(200).json({ message: "Google lead added", lead: newLead });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
