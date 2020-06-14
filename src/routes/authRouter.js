const express = require("express");
const router = express.Router();

const auth_controller = require("../controllers/authController");

router.post("/", auth_controller.login);
router.post("/signup", auth_controller.signup);


module.exports = router;