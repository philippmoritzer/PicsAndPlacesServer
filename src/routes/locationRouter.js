//init router, middleware, and controller
const express = require("express");
const router = express.Router();
const { jwtMW } = require("../middleware/jwtMiddleware");

//define subroutes
const rating_router = require('./ratingRouter');
const media_router = require('./mediaRouter');

//get controller functions
const location_controller = require("../controllers/locationController");

//register request types
router.get("/", location_controller.get_locations);
router.get("/:locationId", location_controller.get_location_by_id);
router.get("/search/:locationName", location_controller.get_location_by_name);
router.post("/", jwtMW, location_controller.insert_location);
router.put("/:locationId", jwtMW, location_controller.update_location);
router.delete("/:locationId", jwtMW, location_controller.delete_location);

//register subroutes
router.use('/:locationId', media_router);
router.use('/:locationId', rating_router);


module.exports = router;