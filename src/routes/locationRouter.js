var express = require("express");
var router = express.Router();

var location_controller = require("../controllers/locationController");

router.get("/", location_controller.get_locations);
router.get("/:id", location_controller.get_location_by_id);
router.post("/", location_controller.insert_location);
router.put("/:id", location_controller.insert_location);
router.delete("/:id", location_controller.delete_location);


module.exports = router;