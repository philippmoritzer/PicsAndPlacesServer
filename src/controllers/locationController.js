const {
    insertLocation,
    getLocations,
    getLocationById,
    deleteLocation,
    updateLocation,
} = require("../database/location");

const { insertMedia, deleteMedia
} = require("../database/media");

const { upload } = require('../middleware/multerMilddeware');


exports.get_locations = async (req, res) => {


    await getLocations(req.query.category).then(result => {

        let locations = [];
        result.forEach(async (item) => {
            var location_item = {
                "id": item.id,
                "name": item.name,
                "description": item.description,
                "latitude": item.latitude,
                "longitude": item.longitude,
                "category": {
                    "id": item.categoryid,
                    "name": item.categoryname,
                    "hexcolor": item.hexcolor
                },
                "address": {
                    "country": {
                        "name": item.countryname
                    },
                    "city": {
                        "zipcode": item.zipcode,
                        "name": item.cityname
                    },
                    "street": item.street,
                    "number": item.number
                },
                "mediaList": item.mediaFiles,
                "createUser": {
                    "id": item.userid,
                    "name": item.username
                }
            };

            locations.push(location_item);
        });
        res.status(200).json(locations);
    }).catch(err => {
        res.status(500).send(err);
    });
};

exports.get_location_by_id = async (req, res) => {
    await getLocationById(req.params.id).then(result => {
        result = result[0];
        var location_item = {
            "id": result.id,
            "name": result.name,
            "description": result.description,
            "latitude": result.latitude,
            "longitude": result.longitude,
            "category": {
                "id": result.categoryid,
                "name": result.categoryname
            },
            "address": {
                "country": {
                    "name": result.countryname
                },
                "city": {
                    "zipcode": result.zipcode,
                    "name": result.cityname
                },
                "street": result.street,
                "number": result.number
            },
            "mediaList": result.mediaFiles,
            "createUser": {
                "id": result.userid,
                "name": result.username
            }
        };

        res.status(200).json(location_item);
    }).catch(error => {
        res.status(200).send(error);
    });

};

exports.insert_location = async (req, res) => {
    await insertLocation(req.body).then(result => {
        res.status(200).json(result);
    }).catch(error => {
        res.status(500).json(error);
    });
};

exports.insert_media = async (req, res) => {
    await upload(req, res).then(async result => {
        let media_response = {
            path: req.file.path.replace("\\", "/"),
            locationId: req.body.locationId
        }
        await insertMedia(media_response.locationId, media_response.path).then(result => {
            media_response.id = result.insertId;
            media_response.date = Date.now();
            res.status(200).json(media_response);
        }).catch(err => {
            res.status(500).json(err);
        });
    }).catch(err => {
        res.status(500).json(err);
    });
}


exports.update_location = async (req, res) => {
    await updateLocation(req.body).then(result => {
        res.status(200).json(result);
    }).catch(error => {
        res.status(500).json(error);
    })

};

exports.delete_location = async (req, res) => {
    await deleteCategory(req.params.id).then(result => {
    }).catch(error => {
    })
};

exports.delete_media = async (req, res) => {
    await deleteMedia(req.params.id).then(result => {
        res.status(200).json(result);
    }).catch(error => {
        res.status(500).json(error);
    });
}
