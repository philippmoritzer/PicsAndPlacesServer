const express = require("express");
const router = express.Router({ mergeParams: true });

const userdata_controller = require("../controllers/userDataController");

router.get('/:userId/rating', userdata_controller.get_ratings_for_user);
router.get('/:userId/location', userdata_controller.get_location_by_user_id)

module.exports = router;