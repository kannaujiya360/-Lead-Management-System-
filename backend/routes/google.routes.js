const express = require("express");
const router = express.Router();
const { fetchGoogleLeads } = require("../controllers/google.controller");


router.get("/fetch", fetchGoogleLeads);

module.exports = router;
