//init router, middleware, and controller
const express = require("express");
const router = express.Router({ mergeParams: true });
const { jwtMW } = require("../middleware/jwtMiddleware");

//get controller fcuntions
const rating_controller = require('../controllers/ratingController');

//routes
router.get('/rating', rating_controller.get_ratings_for_location);
router.get('/rating/avg', rating_controller.get_average_rating_value);
router.post('/rating', jwtMW, rating_controller.insert_rating);
router.put('/rating/:ratingId', jwtMW, rating_controller.edit_rating);
router.delete('/rating/:ratingId', jwtMW, rating_controller.delete_rating);

module.exports = router;
