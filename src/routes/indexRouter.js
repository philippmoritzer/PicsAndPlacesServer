const express = require("express");
const router = express.Router();

const { getIndexData } = require("../controllers/indexController");

router.get("/", function(req, res) {
  res.redirect("/category");
});

module.exports = router;
