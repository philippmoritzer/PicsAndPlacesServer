var express = require("express");
var router = express.Router();

var category_controller = require("../controllers/categoryController");
var { jwtMW } = require("../middleware/jwtMiddleware");

router.get("/", jwtMW, category_controller.get_categories);
router.get("/:id", category_controller.get_category_by_id);
router.post("/", category_controller.insert_category);
router.put("/:id", category_controller.update_category);
router.delete("/:id", category_controller.delete_category);

module.exports = router;
