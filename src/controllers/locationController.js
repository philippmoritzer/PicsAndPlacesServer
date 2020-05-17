const {
    insertLocation,
    getLocations,
    getLocationById,
    deleteLocation,
    updateLocation,
} = require("../database/location");

exports.get_locations = async (req, res) => {
    res.status(351).send("hallo");
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
