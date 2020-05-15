const { getDatabase } = require("./mysql");

async function login(mail, password) {
    console.log(mail);
    const database = await getDatabase();
    return new Promise((resolve, reject) => {
        database.query(
            "SELECT id, name, mail, password, role FROM user WHERE mail = '" + mail + "';",
            (err, rows, fields) => {
                if (!err) {
                    console.log(JSON.stringify(rows));
                    resolve(rows);
                } else {
                    console.log("IM HERE")

                    reject(err);
                }
            }
        );
    });
}

module.exports = {
    login
}