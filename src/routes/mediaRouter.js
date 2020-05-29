const express = require("express");
const router = express.Router();
const { jwtMW } = require("../middleware/jwtMiddleware");

const media_controller = require('../controllers/mediaController');

// router.post("/media", media_controller.insert_media);
router.post("/media", media_controller.insert_media);
router.delete("/media/:mediaId", media_controller.delete_media);

module.exports = router;