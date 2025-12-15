const generateMetaLead = (overrides = {}) => {
return {
source: "Meta",
name: overrides.name || "Rahul Sharma",
email: overrides.email || "rahul@gmail.com",
phone: overrides.phone || "9876543210",
campaign: overrides.campaign || "Diwali Offer",
platform: overrides.platform || "Instagram",
status: "New",
createdAt: new Date(),
};
};


module.exports = { generateMetaLead };