const express = require("express");
const router = express.Router({ mergeParams: true });

const user_controller = require("../controllers/userController");

router.get('/:userId/rating', user_controller.get_ratings_for_user);
router.get('/:userId/location', user_controller.get_location_by_user_id)

module.exports = router;