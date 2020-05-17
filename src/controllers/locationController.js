const {
    insertLocation,
    getLocations,
    getLocationById,
    deleteLocation,
    updateLocation,
} = require("../database/location");

exports.get_locations = async (req, res) => {
    await getLocations().then(result => {
        let locations = [];
        result.forEach((item) => {
            var location_item = {
                "id": item.id,
                "name": item.name,
                "description": item.description,
                "latitude": item.latitude,
                "longitude": item.longitude,
                "category": {
                    "id": item.categoryid,
                    "name": item.categoryname
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
                "mediaList": [],
                "createUser": {
                    "id": item.userid,
                    "name": item.username
                }
            };

            locations.push(location_item);
        });
        res.status(200).send(locations);
    }).catch(err => {
        res.status(500).send(err);
    });

    // await getLocations().then(result => {
    // }).catch(error => {
    // });

};

exports.get_location_by_id = async (req, res) => {
    await getLocationById(req.params.id).then(result => {
    }).catch(error => {

    });

};

exports.insert_location = async (req, res) => {
    await insertLocation(req.body.location).then(result => {
        res.status(200).send("successfully inserted location");
    }).catch(error => {
        console.log(error);
    })
};
exports.update_location = async (req, res) => {
    await updateCategory(req.params.id, req.body.name).then(result => {
    }).catch(error => {
    })

};

exports.delete_location = async (req, res) => {
    await deleteCategory(req.params.id).then(result => {
    }).catch(error => {
    })
};
