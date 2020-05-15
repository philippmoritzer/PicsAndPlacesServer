var express = require("express");
var router = express.Router();

var user_controller = require("../controllers/userController");

router.post("/", user_controller.login);

module.exports = router;