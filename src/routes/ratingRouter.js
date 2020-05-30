const express = require("express");
const router = express.Router({ mergeParams: true });
const { jwtMW } = require("../middleware/jwtMiddleware");

//get controller cuntions
const rating_controller = require('../controllers/ratingController');

router.get('/rating', rating_controller.get_ratings_for_location);
router.post('/rating', rating_controller.insert_rating);
router.put('/rating/:ratingId', rating_controller.edit_rating);
router.delete('/rating/:ratingId', rating_controller.delete_rating);

module.exports = router;
