const { getDatabase } = require("./mysql");

async function getLocations() {
    const database = await getDatabase();
    return new Promise((resolve, reject) => {
        database.query(
            "SELECT id, name FROM category;",
            async (err, rows, fields) => {
                if (!err) {
                    resolve(rows);
                } else {
                    console.log("Error while performing Query." + err.message);
                    reject(err);
                }
            }
        );
    });
}

async function getLocationById(id) {
    const database = await getDatabase();
    return new Promise((resolve, reject) => {
        database.query(
            "SELECT id, name FROM category WHERE id = " + id + ";",
            async (err, rows, fields) => {
                if (!err) {
                    resolve(rows);
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

    return new Promise((resolve, reject) => {
        //check if country already exists, if not, insert into database and retrive foreign key for city table
        let country_exists_query = "SELECT id, country.name FROM country WHERE country.name = '" + location.address.country + "' LIMIT 1;"
        let country_query = "INSERT INTO country VALUES (null, '" + location.address.country + "');";
        let country_id = null;
        database.query(country_exists_query, (err, rows) => {
            if (!err) {
                if (rows.length < 1) { //country does not exist -> insert country
                    database.query(country_query, (err, rows) => {
                        if (!err) {
                            country_id = rows.insertId;
                            insertAddressAfterCountry(database, location, country_id).then(result => resolve(result)).catch(err => reject(err));
                        } else {
                            console.log("ERRROOOOORR");
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

async function updateLocation(id, name) {
    const database = await getDatabase();

    return new Promise((resolve, reject) => {
        database.query(
            "UPDATE category SET name = '" +
            name +
            "' WHERE id = '" +
            id +
            "';",
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
            + location.address.zipcode + "', '"
            + country_id + "');";
        //add address into the databse
        database.query(address_query, (err, rows) => {
            if (!err) {
                let location_query = "INSERT INTO location VALUES (null, '"
                    + location.name + "', '"
                    + location.description + "', '"
                    + location.latitude + "', '"
                    + location.longitude + "', '"
                    + location.category_id + "', '"
                    + rows.insertId + "', "
                    + location.create_user_id
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
        let city_query = "INSERT INTO city VALUES('" + location.address.zipcode + "','" + country_id + "', '" + location.address.city + "');"
        let city_exists_query = "SELECT city.zipcode FROM city WHERE city.zipcode = '" + location.address.zipcode + "' AND country_id = '" + country_id + "' LIMIT 1;"

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
    deleteLocation
};
