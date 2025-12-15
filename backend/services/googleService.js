const generateGoogleLead = (overrides = {}) => {
return {
source: "Google",
name: overrides.name || "Amit Verma",
email: overrides.email || "amit@gmail.com",
phone: overrides.phone || "9999999999",
campaign: overrides.campaign || "Search Ads",
keyword: overrides.keyword || "best digital marketing course",
status: "New",
createdAt: new Date(),
};
};


module.exports = { generateGoogleLead };