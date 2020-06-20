const express = require("express");
const router = express.Router();

const auth_controller = require("../controllers/authController");

router.post("/", auth_controller.login);
router.post("/signup", auth_controller.signup);
router.put("/password", auth_controller.change_password)


module.exports = router;