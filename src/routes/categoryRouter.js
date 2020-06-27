//init router, middleware, and controller
const express = require("express");
const router = express.Router();

const category_controller = require("../controllers/categoryController");
const { jwtMW } = require("../middleware/jwtMiddleware");

router.get("/", category_controller.get_categories);
router.get("/:id", category_controller.get_category_by_id);
router.post("/", jwtMW, category_controller.insert_category);
router.put("/:id", jwtMW, category_controller.update_category);
router.delete("/:id", jwtMW, category_controller.delete_category);

module.exports = router;
