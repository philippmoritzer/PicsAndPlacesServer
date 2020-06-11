const { getTours, getTourById, insertTour, editTour, deleteTour } = require('../database/tour');

exports.get_tours = async (req, res) => {
    await getTours().then(result => {

        let tours = [];
        result.forEach((item, index, array) => {
            let tour = {
                "id": item.id,
                "name": item.name,
                "description": item.description,
                "length": item.length,
                "category": {
                    "id": item.categoryid,
                    "name": item.categoryname,
                    "hexcolor": item.hexcolor
                },
                locations: [],
                "created_time": item.tour_created_time,
                "update_time": item.tour_update_time

            }
            item.locations.forEach((item, index, array) => {
                var location_item = {
                    "id": item.location_id,
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
                tour.locations.push(location_item);
            });
            tours.push(tour);
        });
        res.status(200).json(tours);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });

}

exports.get_tour_by_id = async (req, res) => {

    await getTourById(req.params.tourId).then(result => {
        let tour = {
            "id": result.id,
            "name": result.name,
            "description": result.description,
            "length": result.length,
            "category": {
                "id": result.categoryid,
                "name": result.categoryname,
                "hexcolor": result.hexcolor
            },
            locations: [],
            "created_time": result.tour_created_time,
            "update_time": result.tour_update_time

        }
        result.locations.forEach((item, index, array) => {
            var location_item = {
                "id": item.location_id,
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
            tour.locations.push(location_item);
        });
        res.status(200).json(tour);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });

}

exports.insert_tour = async (req, res) => {
    res.status(200).json({});
}

exports.edit_tour = async (req, res) => {
    res.status(200).json({});
}

exports.delete_tour = async (req, res) => {
    await deleteTour(req.params.tourId).then(result => {
        res.status(200).json(result);
    }).catch(err => {
        res.status(500).json(err);
    })
}