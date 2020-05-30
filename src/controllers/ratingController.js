const { getRatingById, getRatingsForLocation, insertRating
} = require("../database/rating");

exports.get_ratings_for_location = async (req, res) => {
    await getRatingsForLocation(req.params.locationId).then(result => {
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

exports.insert_rating = async (req, res) => {
    await insertRating(req.params.locationId, req.body).then(async result => {
        await getRatingById(result.insertId).then(result => {
            result = result[0];
            let rating = {
                "id": result.id,
                "value": result.value,
                "comment": result.comment,
                "createdUser": {
                    "id": result.userId,
                    "name": result.name
                },
                "createdTime": result.created_time,
                "updateTime": result.update_time
            };

            res.status(200).json(rating);
        }).catch(err => {
            res.status(500).send(err);
        });

    }).catch(err => {
        res.status(500).send(err);
    });
}

exports.edit_rating = async (req, res) => {

}

exports.delete_rating = async (req, res) => {

}
