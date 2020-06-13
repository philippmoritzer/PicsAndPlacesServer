const express = require("express");
const router = express.Router({ mergeParams: true });
const { jwtMW } = require("../middleware/jwtMiddleware");

//get controller fcuntions
const rating_controller = require('../controllers/ratingController');

router.get('/rating', rating_controller.get_ratings_for_location);
router.get('/rating/user/:userId', rating_controller.get_ratings_for_user);
router.get('/rating/avg', rating_controller.get_average_rating_value);
router.post('/rating', rating_controller.insert_rating);
router.put('/rating/:ratingId', rating_controller.edit_rating);
router.delete('/rating/:ratingId', rating_controller.delete_rating);

module.exports = router;
