const express = require("express");
const router = express.Router();

const user_controller = require("../controllers/userController");

router.post("/", user_controller.login);
router.post("/signup", user_controller.signup);

module.exports = router;