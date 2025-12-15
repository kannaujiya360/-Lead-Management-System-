const express = require("express");
const router = express.Router();
const { getLeads, addLead } = require("../controllers/leadController");


router.get("/", getLeads);


router.post("/", addLead);

module.exports = router;
