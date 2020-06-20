const {
    getRatingsForUser
} = require("../database/rating");

const {
    getLocationByUserId
} = require('../database/location');

const {
    getTourByUserId
} = require('../database/tour');

const {
    getUserInfo
} = require('../database/user');

const { location } = require('../models/location');
const { tour } = require('../models/tour');
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

exports.get_tour_by_user_id = async (req, res) => {
    await getTourByUserId(req.params.userId).then(result => {
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

exports.get_user_info = async (req, res) => {
    await getUserInfo(req.params.userId).then(result => {
        let user = {
            "id": result.id,
            "mail": result.mail,
            "name": result.name,
            "role": result.role
        }
        res.status(200).json(user);
    }).catch(err => {
        res.status(500).json(err);
    });
}