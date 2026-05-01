const express = require("express");
const router = express.Router();
const { generateAd } = require("../controllers/adController");

router.post("/generate", generateAd);

module.exports = router;