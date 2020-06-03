const express = require("express");
const router = express.Router();

const tour_controller = require("../controllers/tourController");

router.get('/', tour_controller.get_tours);

module.exports = router;