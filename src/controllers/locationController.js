const {
    insertLocation,
    getLocations,
    getLocationById,
    getLocationByName,
    getLocationByUserId,
    deleteLocation,
    updateLocation,
} = require("../database/location");

const { location } = require('../models/location');

exports.get_locations = async (req, res) => {

    await getLocations(req.query.category).then(result => {
        let locations = [];
        result.forEach((item) => {
            const location_item = location(item);
            locations.push(location_item);
        });
        res.status(200).json(locations);

    }).catch(err => {
        res.status(500).send(err);
    });
};

exports.get_location_by_id = async (req, res) => {
    await getLocationById(req.params.locationId).then(result => {
        result = result[0];
        var location_item = location(result);
        res.status(200).json(location_item);
    }).catch(error => {
        res.status(200).send(error);
    });

};

exports.get_location_by_name = async (req, res) => {
    console.log(req.params);
    await getLocationByName(req.params.locationName).then(result => {
        let locations = [];
        result.forEach(item => {
            locations.push(location(item));
        });

        res.status(200).json(locations);
    }).catch(error => {
        res.status(200).send(error);
    });

};

exports.insert_location = async (req, res) => {
    await insertLocation(req.body).then(async result => {
        await getLocationById(result.insertId).then(result => {
            result = result[0];
            const resultLocation = location(result);
            console.log(resultLocation);
            global.io.emit('locationinsert', resultLocation);

            res.status(200).json(resultLocation);
        }).catch(error => {
            res.status(500).json(error);
        });

    }).catch(error => {
        console.log(error);
        res.status(500).json(error);
    });
};

exports.update_location = async (req, res) => {
    await updateLocation(req.body).then(async result => {
        await getLocationById(req.params.locationId).then(result => {
            result = result[0];
            res.status(200).json(location(result));
        }).catch(error => {
            res.status(500).json(error);
        });
    }).catch(error => {
        res.status(500).json(error);
    })

};

exports.delete_location = async (req, res) => {
    await deleteLocation(req.params.locationId).then(result => {
        const data = { data: req.params.locationId };
        global.io.emit('locationdelete', data);
        res.status(200).json(result);
    }).catch(error => {
        res.status(500).json(error);
    })
};


