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
    let city_query = "INSERT INTO city VALUES('" + location.address.zipcode + "', '" + location.address.city + "');"
    return new Promise((resolve, reject) => {

        database.query(city_query, (err, rows, fields) => {
            if (!err) {
                let address_query = "INSERT INTO address VALUES (null, '" + location.address.street + "', '" + location.address.number + "', '" + location.address.zipcode + "');"
                database.query(address_query, (err, rows) => {
                    if (!err) {
                        let query = "INSERT INTO location VALUES (null, '" + location.name + "', '" + location.description + "', '" + location.latitude + "', '" + location.longitude + "', '" + location.category_id + "', '" + rows.insertId + "', " + location.create_user_id + ", now(), null);";
                        database.query(
                            query,
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

module.exports = {
    getLocations,
    getLocationById,
    insertLocation,
    updateLocation,
    deleteLocation
};
