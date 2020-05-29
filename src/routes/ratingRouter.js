const express = require("express");
const router = express.Router();
const { jwtMW } = require("../middleware/jwtMiddleware");

//get controller cuntions
const rating_controller = require('../controllers/ratingController');

router.get('/rating/:ratingId', rating_controller.get_ratings_for_location);

module.exports = router;
