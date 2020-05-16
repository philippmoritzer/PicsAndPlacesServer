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

async function insertLocation(name) {
    const database = await getDatabase();

    return new Promise((resolve, reject) => {
        database.query(
            "INSERT INTO category VALUES (null, '" + name + "');",
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
