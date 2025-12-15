const Lead = require("../models/Lead");


exports.fetchMetaLeads = async (req, res) => {
  try {
    const dummyLead = {
      name: `Meta User ${Date.now()}`,
      email: `metauser${Date.now()}@example.com`,
      phone: `999${Math.floor(1000000 + Math.random() * 9000000)}`,
      source: "Meta", 
      campaign: "FB Lead Gen - Web Design",
      service: "Web Design",
      status: "New",
      createdAt: new Date(),
    };

    const newLead = await Lead.create(dummyLead);

    res.status(200).json({
      success: true,
      message: "Meta Ads lead synced successfully",
      lead: newLead,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
