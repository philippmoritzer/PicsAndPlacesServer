//init router, middleware, and controller
const express = require("express");
const router = express.Router({ mergeParams: true });
const { jwtMW } = require("../middleware/jwtMiddleware");

const media_controller = require('../controllers/mediaController');

//routes
router.post("/media", jwtMW, media_controller.insert_media);
router.delete("/media/:mediaId", jwtMW, media_controller.delete_media);

module.exports = router;