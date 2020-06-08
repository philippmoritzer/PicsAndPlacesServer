const {
    insertLocation,
    getLocations,
    getLocationById,
    getLocationByName,
    deleteLocation,
    updateLocation,
} = require("../database/location");

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
                },
                "createdTime": item.created_time,
                "updateTime": item.update_ime
            };

            locations.push(location_item);
        });
        res.status(200).json(locations);
    }).catch(err => {
        res.status(500).send(err);
    });
};

exports.get_location_by_id = async (req, res) => {
    await getLocationById(req.params.locationId).then(result => {
        console.log(result[0]);
        result = result[0];
        var location_item = {
            "id": result.id,
            "name": result.name,
            "description": result.description,
            "latitude": result.latitude,
            "longitude": result.longitude,
            "category": {
                "id": result.categoryid,
                "name": result.categoryname,
                "hexcolor": result.hexcolor
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
            },
            "createdTime": result.created_time,
            "updateTime": result.update_time
        };

        res.status(200).json(location_item);
    }).catch(error => {
        res.status(200).send(error);
    });

};

exports.get_location_by_name = async (req, res) => {
    console.log(req.params);
    await getLocationByName(req.params.locationName).then(result => {
        console.log(result[0]);
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
                },
                "createdTime": item.created_time,
                "updateTime": item.update_time
            };
            locations.push(location_item);
        });

        res.status(200).json(locations);
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

exports.update_location = async (req, res) => {
    await updateLocation(req.body).then(result => {
        res.status(200).json(result);
    }).catch(error => {
        res.status(500).json(error);
    })

};

exports.delete_location = async (req, res) => {
    console.log("hallo");
    await deleteLocation(req.params.locationId).then(result => {
        res.status(200).json(result);
    }).catch(error => {
        res.status(500).json(error);
    })
};


