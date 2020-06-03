const { getDatabase } = require("./mysql");

async function getTours() {
    const database = await getDatabase();

    return new Promise((resolve, reject) => {

    });
}

module.exports = {
    getTours
}