const { getDatabase } = require("./mysql");
const { getMediaFilesForLocation, deleteMedia } = require("./media");

async function getLocations(categoryFilter) {
    const database = await getDatabase();
    let query = "SELECT location.id, location.name, description, latitude, longitude, category.name AS categoryname, category.id AS categoryid, category.hexcolor, address.street,"
        + " address.number, address.zipcode, country.name AS countryname, city.city AS cityname, created_time, update_time, user.name AS username, user.id AS userid"
        + " FROM location INNER JOIN category ON category.id = location.category_id"
        + " INNER JOIN user ON user.id = location.create_user_id"
        + " INNER JOIN address ON location.address_id = address.id"
        + " INNER JOIN city ON address.zipcode = city.zipcode AND address.country_id = city.country_id"
        + " INNER JOIN country ON city.country_id = country.id";
    if (categoryFilter) { // categoryFilter can be ?category=1,11 OR category = 1 OR category=
        if (categoryFilter.includes(",")) {
            const filterArr = categoryFilter.split(",")
            filterArr.forEach((categoryId, index, array) => {
                if (index === 0) {
                    query = query + " WHERE category.id = '" + categoryId + "'"
                } else {
                    query = query + " OR category.id = '" + categoryId + "'";
                }

            });
        } else {
            query = query + " WHERE category.id = '" + categoryFilter + "'"
        }
    }
    return new Promise((resolve, reject) => {
        database.query(
            query,
            async (err, rows) => {
                if (!err) {
                    if (rows.length === 0) {
                        if (!err) {
                            resolve(rows);
                        } else {
                            reject(err);
                        }
                    } else {
                        rows.forEach(async (item, index, rows) => {
                            await getMediaFilesForLocation(item.id).then(result => {
                                item.mediaFiles = result;
                                if (index === rows.length - 1) {
                                    resolve(rows);
                                }

                            }).catch(err => {
                                reject(err);
                            });
                        });
                    }

                } else {
                    reject(err);
                }
            }
        );
    });
}




async function getLocationById(id) {
    const database = await getDatabase();
    let query = "SELECT location.id, location.name, description, latitude, longitude, category.name AS categoryname, category.id AS categoryid, address.street,"
        + " address.number, address.zipcode, country.name AS countryname, city.city AS cityname, created_time, update_time, user.name AS username, user.id AS userid"
        + " FROM location INNER JOIN category ON category.id = location.category_id"
        + " INNER JOIN user ON user.id = location.create_user_id"
        + " INNER JOIN address ON location.address_id = address.id"
        + " INNER JOIN city ON address.zipcode = city.zipcode AND address.country_id = city.country_id"
        + " INNER JOIN country ON city.country_id = country.id WHERE location.id = '" + id + "';";
    return new Promise((resolve, reject) => {
        database.query(
            query,
            async (err, rows, fields) => {
                if (!err) {
                    await getMediaFilesForLocation(rows[0].id).then(result => {
                        rows[0].mediaFiles = result;
                        resolve(rows);
                    }).catch(err => {
                        reject(err);
                    });

                } else {
                    console.log("Error while performing Query." + err.message);
                    reject(err);
                }
            }
        );
    });
}

async function insertLocation(location) {
    const database = await getDatabase();
    console.log(location);
    return new Promise((resolve, reject) => {
        //check if country already exists, if not, insert into database and retrive foreign key for city table
        let country_exists_query = "SELECT id, country.name FROM country WHERE country.name = '" + location.address.country.name + "' LIMIT 1;"
        let country_query = "INSERT INTO country VALUES (null, '" + location.address.country.name + "');";
        let country_id = null;
        database.query(country_exists_query, (err, rows) => {
            if (!err) {
                if (rows.length < 1) { //country does not exist -> insert country, then add the address
                    database.query(country_query, (err, rows) => {
                        if (!err) {
                            country_id = rows.insertId;
                            insertAddressAfterCountry(database, location, country_id).then(result => resolve(result)).catch(err => reject(err));
                        } else {
                            reject(err);
                        }
                    });
                } else { //Country does exist -> retrieve id and continue adding the address                    
                    country_id = rows[0].id;
                    insertAddressAfterCountry(database, location, country_id).then(result => resolve(result)).catch(err => reject(err));
                }
            } else {
                reject(err);
            }
        });

    });

}

async function updateLocation(location) {
    const database = await getDatabase();
    console.log("thisone")
    console.log(location);
    return new Promise((resolve, reject) => {
        let query = "UPDATE location SET name = '" + location.name + "',"
            + "description = '" + location.description + "',"
            + "category_id = '" + location.category.id + "',"
            + "update_time = now()"
            + "WHERE id = '" + location.id + "';"

        database.query(
            query,
            (err, rows, fields) => {

                if (!err) {
                    resolve(rows);
                } else {
                    console.log(err);
                    reject(err);
                }

            }
        );
    });
}

async function deleteLocation(id) {
    const database = await getDatabase();

    return new Promise((resolve, reject) => {
        database.query(
            "DELETE FROM location WHERE id = '" + id + "';",
            (err, rows, fields) => {
                if (!err) {
                    resolve(rows);
                } else {
                    reject(err);
                }
            }
        );
    });
}

const insertAddressAndLocation = (database, location, country_id) => {

    return new Promise((resolve, reject) => {
        let address_query = "INSERT INTO address VALUES (null, '"
            + location.address.street + "', '"
            + location.address.number + "', '"
            + location.address.city.zipcode + "', '"
            + country_id + "');";
        //add address into the databse
        database.query(address_query, (err, rows) => {
            if (!err) {
                let location_query = "INSERT INTO location VALUES (null, '"
                    + location.name + "', '"
                    + location.description + "', '"
                    + location.latitude + "', '"
                    + location.longitude + "', '"
                    + location.category.id + "', '"
                    + rows.insertId + "', "
                    + location.createUser.id
                    + ", now(), null);";
                //if address was successfully inserted, insert location data
                database.query(
                    location_query,
                    (err, rows, fields) => {
                        if (!err) {
                            resolve(rows);
                        } else {
                            reject(err);
                        }
                    }
                );

            } else {
                reject(err);
            }
        });
    });
}

const insertAddressAfterCountry = (database, location, country_id) => {
    return new Promise((resolve, reject) => {
        //check if zipcode already exists, if not, insert into database
        let city_query = "INSERT INTO city VALUES('" + location.address.city.zipcode + "','" + country_id + "', '" + location.address.city.name + "');"
        let city_exists_query = "SELECT city.zipcode FROM city WHERE city.zipcode = '" + location.address.city.zipcode + "' AND country_id = '" + country_id + "' LIMIT 1;"

        database.query(city_exists_query, (err, rows) => {
            if (rows.length < 1) { //city does not exist yet -> insert city
                database.query(city_query, (err, rows) => {
                    if (err) {
                        reject(err);
                    }
                    insertAddressAndLocation(database, location, country_id).then(rows => resolve(rows)).catch(err => { reject(err) })

                });
            } else { // city does exist -> insert into address
                insertAddressAndLocation(database, location, country_id).then(rows => resolve(rows)).catch(err => { reject(err) })
            }
        });
    });

}



module.exports = {
    getLocations,
    getLocationById,
    insertLocation,
    updateLocation,
    deleteLocation,
};
