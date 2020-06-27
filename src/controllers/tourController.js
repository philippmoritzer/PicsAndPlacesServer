const { getTours, getTourById, insertTour, editTour, deleteTour } = require('../database/tour');
const { tour } = require('../models/tour');
const { location } = require('../models/location');


/**
 * GET - Select
 * Returns all tours
 * Response Status 200, 500
 */
exports.get_tours = async (req, res) => {
    await getTours().then(result => {
        let tours = [];
        result.forEach((item, index, array) => {
            const tour_item = (tour(item));
            item.locations.forEach((item, index, array) => {
                item.id = item.location_id;
                tour_item.locations.push(location(item));

            });
            tours.push(tour_item);
            if (index === array.length - 1) {
                res.status(200).json(tours);
            }
        });

    }).catch(err => {
        res.status(500).json(err);
    });

}

/**
 * GET - Select
 * Returns multiple random tours
 * :amount needed in Request to specify how many random tours should be returned
 * Response Status 200, 500
 */
exports.get_random_tours = async (req, res) => {
    await getTours(req.params.amount).then(result => {
        let tours = [];
        result.forEach((item, index, array) => {
            const tour_item = (tour(item));
            item.locations.forEach((item, index, array) => {
                item.id = item.location_id;
                tour_item.locations.push(location(item));

            });
            tours.push(tour_item);
            if (index === array.length - 1) {
                res.status(200).json(tours);
            }
        });
    })
}

/**
 * GET - Select
 * Returns tour by providing an id
 * :tourId in url needs to be provided
 * Response Status 200, 500
 */
exports.get_tour_by_id = async (req, res) => {

    await getTourById(req.params.tourId).then(result => {
        const tour_item = tour(result);
        result.locations.forEach((item, index, array) => {
            item.id = item.location_id;
            tour_item.locations.push(location(item));
            if (index === array.length - 1) {
                res.status(200).json(tour_item);
            }

        });

    }).catch(err => {
        res.status(500).json(err);
    });

}

/**
 * POST - Insert - Protected Route
 * Inserts tour by providing data
 * req.body for requirements see example Postman-Request in data-Folder
 * Response Status 200, 500
 */
exports.insert_tour = async (req, res) => {
    await insertTour(req.body).then(async result => {
        await getTourById(result.insertId).then(result => {
            const tour_item = tour(result);
            result.locations.forEach((item, index, array) => {
                item.id = item.location_id;
                tour_item.locations.push(location(item));
                if (index === array.length - 1) {
                    res.status(200).json(tour_item);
                }

            });
        }).catch(err => {
            res.status(500).json(err);
        })

    }).catch(err => {
        res.status(500).json(err);
    });
}

/**
 * PUT - Update - Protected Route
 * Updates tour by providing data
 * :tourId in url needs to be provided
 * req.body for requirements see example Postman-Request in data-Folder
 * Response Status 200, 500
 */
exports.edit_tour = async (req, res) => {
    await editTour(req.params.tourId, req.body).then(async result => {
        await getTourById(result).then(result => {
            const tour_item = tour(result);
            result.locations.forEach((item, index, array) => {
                item.id = item.location_id;
                tour_item.locations.push(location(item));
                if (index === array.length - 1) {
                    res.status(200).json(tour_item);
                }

            });
        }).catch(err => {
            res.status(500).json(err);
        })
    }).catch(err => {
        res.status(500).json(err);
    })

}

/**
 * DELETE - Delete - Protected Route
 * Removes location by providing an exisiting Id
 * :tourId in url needs to be provided
 * Response Status 200, 500
 */
exports.delete_tour = async (req, res) => {
    await deleteTour(req.params.tourId).then(result => {
        res.status(200).json(result);
    }).catch(err => {
        res.status(500).json(err);
    })
}

