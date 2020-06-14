const {
    getRatingsForUser
} = require("../database/rating");

const {
    getLocationByUserId
} = require('../database/location');

const { location } = require('../models/location');
const { rating } = require('../models/rating');


exports.get_ratings_for_user = async (req, res) => {
    await getRatingsForUser(req.params.userId).then(result => {
        let ratings = [];

        result.forEach(item => {
            ratings.push(rating(item));
        });

        res.status(200).json(ratings);
    }).catch(err => {
        res.status(500).json(err);
    });
}

exports.get_location_by_user_id = async (req, res) => {
    console.log(req.params);
    await getLocationByUserId(req.params.userId).then(result => {
        let locations = [];
        result.forEach(async (item) => {
            locations.push(location(item));
        });
        res.status(200).json(locations);
    }).catch(error => {
        res.status(500).json(error);
    });

};