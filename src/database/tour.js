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
                            console.log(rows);
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

    return new Promise((resolve, reject) => {

    });
}

async function editTour(tourId, tour) {
    const database = await getDatabase();

    return new Promise((resolve, reject) => {

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