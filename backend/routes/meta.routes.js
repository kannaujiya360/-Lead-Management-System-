const express = require("express");
const router = express.Router();
const { fetchMetaLeads } = require("../controllers/meta.controller");


router.get("/fetch", fetchMetaLeads);

module.exports = router;
