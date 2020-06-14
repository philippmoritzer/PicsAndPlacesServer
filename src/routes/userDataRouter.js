const express = require("express");
const router = express.Router({ mergeParams: true });

const user_controller = require("../controllers/userController");

router.get('/:userId/rating', user_controller.get_ratings_for_user);

module.exports = router;