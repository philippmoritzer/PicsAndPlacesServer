const express = require("express");
const router = express.Router({ mergeParams: true });
const { jwtMW } = require("../middleware/jwtMiddleware");

//get controller cuntions
const rating_controller = require('../controllers/ratingController');

router.get('/rating', rating_controller.get_ratings_for_location);

module.exports = router;
