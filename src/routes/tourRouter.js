//init router, middleware, and controller
const express = require("express");
const router = express.Router();
const { jwtMW } = require("../middleware/jwtMiddleware");


const tour_controller = require("../controllers/tourController");

//routes
router.get('/', tour_controller.get_tours);
router.get('/rnd/:amount', tour_controller.get_random_tours);
router.get('/:tourId', tour_controller.get_tour_by_id);
router.post('/', jwtMW, tour_controller.insert_tour);
router.put('/:tourId', jwtMW, tour_controller.edit_tour);
router.delete('/:tourId', jwtMW, tour_controller.delete_tour);

module.exports = router;