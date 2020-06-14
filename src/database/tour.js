const { getDatabase } = require("./mysql");

async function getTours() {
    const database = await getDatabase();

    let query = "SELECT tour.id, tour.name, tour.description, tour.length, tour.created_time AS tour_created_time, tour.update_time AS tour_update_time, category.id as categoryid, category.name as categoryname, category.hexcolor"
        + " FROM tour INNER JOIN category ON tour.category_id = category.id;";

    let childQuery = "SELECT location_id, location.name, description, latitude, longitude, category.name AS categoryname, category.id AS categoryid, category.hexcolor, address.street,"
        + " address.number, address.zipcode, country.name AS countryname, city.city AS cityname, location.created_time, location.update_time, user.name AS username, user.id AS userid FROM location_tour"
        + " INNER JOIN location ON location_tour.location_id = location.id"
        + " INNER JOIN category ON category.id = location.category_id"
        + " INNER JOIN user ON user.id = location.create_user_id"
        + " INNER JOIN address ON location.address_id = address.id"
        + " INNER JOIN city ON address.zipcode = city.zipcode AND address.country_id = city.country_id"
        + " INNER JOIN country ON city.country_id = country.id"
        + " WHERE location_tour.tour_id = ";

    return new Promise((resolve, reject) => {
        database.query(query, (err, resRows) => {
            if (!err) {
                resRows.forEach(async (item, index, array) => {
                    let newQuery = childQuery + resRows[index].id;
                    database.query(newQuery, (err, rows) => {
                        if (!err) {
                            resRows[index]['locations'] = rows;
                            if (index === array.length - 1) {
                                resolve(resRows);
                            }
                        } else {
                            reject(err);
                        }
                    });
                });
            } else {
                reject(err);
            }
        });
    });
}

async function getTourById(tourId) {
    const database = await getDatabase();
    let query = "SELECT tour.id, tour.name, tour.description, tour.length, tour.created_time AS tour_created_time, tour.update_time AS tour_update_time, category.id as categoryid, category.name as categoryname, category.hexcolor"
        + " FROM tour INNER JOIN category ON tour.category_id = category.id WHERE tour.id = '" + tourId + "';";

    let childQuery = "SELECT location_id, location.name, description, latitude, longitude, category.name AS categoryname, category.id AS categoryid, category.hexcolor, address.street,"
        + " address.number, address.zipcode, country.name AS countryname, city.city AS cityname, location.created_time, location.update_time, user.name AS username, user.id AS userid FROM location_tour"
        + " INNER JOIN location ON location_tour.location_id = location.id"
        + " INNER JOIN category ON category.id = location.category_id"
        + " INNER JOIN user ON user.id = location.create_user_id"
        + " INNER JOIN address ON location.address_id = address.id"
        + " INNER JOIN city ON address.zipcode = city.zipcode AND address.country_id = city.country_id"
        + " INNER JOIN country ON city.country_id = country.id"
        + " WHERE location_tour.tour_id = '" + tourId + "';";

    return new Promise((resolve, reject) => {
        database.query(query, (err, resRows) => {
            if (!err) {
                resRows.forEach(async (item, index, array) => {
                    let newQuery = childQuery + resRows[index].id;
                    database.query(childQuery, (err, rows) => {
                        if (!err) {
                            resRows[index]['locations'] = rows;
                            console.log(rows);
                            if (index === array.length - 1) {
                                resolve(resRows[0]);
                            }
                        } else {
                            reject(err);
                        }
                    });
                });
            } else {
                reject(err);
            }
        });
    });
}

async function insertTour(tour) {
    const database = await getDatabase();
    let query = "INSERT INTO tour VALUES(null, '" + tour.name + "', '" + tour.description + "', '" + tour.length + "', '" + tour.category.id + "', now(), null);"

    return new Promise((resolve, reject) => {
        database.query(query, (err, resRows) => {
            if (!err) {
                tour.locations.forEach((item, index, array) => {
                    database.query(`INSERT INTO location_tour VALUES(${item}, ${resRows.insertId});`, (err, rows) => {
                        if (!err) {
                            resolve(resRows);
                        } else {
                            reject(err);
                        }
                    });
                });
            } else {
                reject(err);
            }
        });
    });
}

async function editTour(tourId, tour) {
    const database = await getDatabase();
    const removedLocations = tour.removedLocations;
    const addedLocations = tour.addedLocations;

    let query = "UPDATE tour SET name = '" + tour.name + "', description = '" + tour.description + "', length = '" + tour.length + "', category_id = '" + tour.category.id + "' WHERE id = '" + tourId + "';"
    let deleteLocationsQuery = "DELETE FROM location_tour WHERE tour_id = '" + tourId + "' AND location_id = ";
    let insertLocationsQuery = "INSERT INTO location_tour VALUES('";

    return new Promise((resolve, reject) => {

        database.query(query, (err, rows) => {
            if (!err) {
                console.log(addedLocations.length);
                if (addedLocations.length <= 0 && removedLocations <= 0) {
                    resolve(tourId);
                }
                if (!addedLocations.length <= 0) {
                    addedLocations.forEach((item, index, array) => {
                        database.query(insertLocationsQuery + item + "', '" + tourId + "');", (err, rows) => {
                            if (!err) {
                                if (index === array.length - 1) {

                                    if (removedLocations.length > 0) {
                                        removedLocations.forEach((item, index, array) => {
                                            database.query(deleteLocationsQuery + item, (err, rows) => {
                                                if (!err) {
                                                    if (index === array.length - 1) {
                                                        resolve(tourId);
                                                    }
                                                } else {
                                                    resolve(tourId);
                                                }
                                            });

                                        });
                                    } else {
                                        resolve(tourId);
                                    }
                                }
                            } else {
                                reject(err);
                            }
                        })
                    });
                } else {
                    removedLocations.forEach((item, index, array) => {
                        database.query(deleteLocationsQuery + item, (err, rows) => {
                            if (!err) {
                                if (index === array.length - 1) {
                                    resolve(tourId);
                                }
                            } else {
                                resolve(tourId);
                            }
                        });
                    });
                }
            } else {
                reject(err);
            }
        });
    });
}

async function deleteTour(tourId) {
    const database = await getDatabase();

    let query = "DELETE FROM tour WHERE tour.id = '" + tourId + "'";
    let deleteLocationTourQuery = "DELETE FROM location_tour WHERE tour_id = '" + tourId + "';";
    return new Promise((resolve, reject) => {
        database.query(deleteLocationTourQuery, (err, rows) => {
            if (!err) {
                database.query(query, (err, rows) => {
                    resolve(rows);
                });
            } else {
                reject(err);
            }
        });
    });
}


module.exports = {
    getTours,
    getTourById,
    insertTour,
    editTour,
    deleteTour
}