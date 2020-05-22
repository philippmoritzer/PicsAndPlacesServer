const { getDatabase } = require("./mysql");


async function insertMedia(locationId, mediapath) {
    const database = await getDatabase();
    return new Promise((resolve, reject) => {
        let media_query = "INSERT INTO media VALUES(null, now(), '" + mediapath + "', '" + locationId + "');"
        database.query(media_query, (err, rows) => {
            console.log(rows);
            if (!err) {
                resolve(rows);
            } else {
                reject(err);
            }
        });

    });
}

async function getMediaFilesForLocation(locationId) {
    const database = await getDatabase();

    return new Promise((resolve, reject) => {
        let media_query = "SELECT media.id, media.date, media.mediapath FROM media WHERE location_id = '" + locationId + "';"
        database.query(media_query, (err, rows) => {
            if (!err) {
                resolve(rows);
            } else {
                reject(err);
            }
        });

    });
}

module.exports = {
    insertMedia,
    getMediaFilesForLocation
}