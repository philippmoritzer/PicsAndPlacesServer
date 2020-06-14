const {
    getRatingsForUser
} = require("../database/rating");

const {
    getLocationByUserId
} = require('../database/location');

const { location } = require('../models/location');


exports.get_ratings_for_user = async (req, res) => {
    await getRatingsForUser(req.params.userId).then(result => {
        let ratings = [];

        result.forEach(item => {
            let rating = {
                "id": item.id,
                "value": item.value,
                "comment": item.comment,
                "createdUser": {
                    "id": item.userId,
                    "name": item.name
                },
                "createdTime": item.created_time,
                "updateTime": item.update_time
            };
            ratings.push(rating);
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