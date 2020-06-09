const { getDatabase } = require("./mysql");


async function getRatingById(ratingId) {
    const database = await getDatabase();
    let query = "SELECT rating.id, rating.value, rating.comment, rating.location_id, rating.created_time, rating.update_time, user.name, user.id as userId"
        + " FROM rating INNER JOIN user ON user.id = rating.user_id"
        + " WHERE rating.id = '" + ratingId + "';";

    return new Promise((resolve, reject) => {
        database.query(query, (err, rows) => {
            if (!err) {
                resolve(rows);
            } else {
                reject(err);
            }
        });
    });
}

async function getRatingsForLocation(locationId) {
    const database = await getDatabase();
    let query = "SELECT rating.id, rating.value, rating.comment, rating.location_id, rating.created_time, rating.update_time, user.name, user.id as userId"
        + " FROM rating INNER JOIN user ON user.id = rating.user_id"
        + " WHERE rating.location_id = '" + locationId + "' ORDER BY created_time DESC;";

    return new Promise((resolve, reject) => {
        database.query(query, (err, rows) => {
            console.log(rows);
            if (!err) {
                resolve(rows);
            } else {
                reject(err);
            }
        });
    });
}

async function getAverageRatingValue(locationId) {
    const database = await getDatabase();
    let query = "SELECT AVG(Value) as avgRatingValue FROM rating where location_id = '" + locationId + "';"
    return new Promise((resolve, reject) => {
        database.query(query, (err, rows) => {
            if (!err) {
                resolve(rows);
            } else {
                reject(err);
            }
        });
    });
}

async function insertRating(locationId, rating) {
    const database = await getDatabase();
    let query = "INSERT INTO rating VALUES(null, '" + rating.value + "', '" + rating.comment + "', null, '" + locationId + "', '" + rating.createdUser.id + "', now(), null);";

    return new Promise((resolve, reject) => {
        database.query(query, (err, rows) => {
            console.log(rows);
            if (!err) {
                resolve(rows);
            } else {
                reject(err);
            }
        });
    });
}

async function editRating(id, rating) {
    const database = await getDatabase();

    return new Promise((resolve, reject) => {
        let query = "UPDATE rating SET value = '" + rating.value + "', "
            + "comment = '" + rating.comment + "', "
            + "update_time = now() "
            + "WHERE id = '" + id + "';"


        database.query(query, (err, rows) => {
            if (!err) {
                resolve(rows);
            } else {
                reject(err);
            }
        });
    });
}

async function deleteRating(ratingId) {
    const database = await getDatabase();

    return new Promise((resolve, reject) => {
        let query = "DELETE FROM rating WHERE id = '" + ratingId + "'"
        database.query(query, (err, rows) => {
            if (!err) {
                resolve(rows);
            } else {
                reject(err);
            }
        });
    });
}


module.exports = {
    getRatingById,
    getRatingsForLocation,
    getAverageRatingValue,
    insertRating,
    editRating,
    deleteRating
}