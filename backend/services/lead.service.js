const Lead = require("../models/Lead");
const User = require("../models/User");


const getAllLeads = async (source) => {
  const filter = source ? { source } : {};
  return await Lead.find(filter).populate("assignedTo", "name email");
};


const assignLeadToUser = async (leadId, userName) => {
  const user = await User.findOne({ name: userName });
  if (!user) throw new Error("User not found");

  const lead = await Lead.findByIdAndUpdate(
    leadId,
    { assignedTo: user._id, status: "assigned" },
    { new: true }
  );
  return lead;
};

const createLead = async (leadData) => {
  const newLead = await Lead.create(leadData);
  return newLead;
};

module.exports = {
  getAllLeads,
  assignLeadToUser,
  createLead,
};
