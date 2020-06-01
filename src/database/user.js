const { getDatabase } = require("./mysql");

async function login(mail, password) {
    const database = await getDatabase();
    return new Promise((resolve, reject) => {
        database.query(
            "SELECT id, name, mail, password, role FROM user WHERE mail = '" + mail + "';",
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

async function signup(user) {
    console.log(user);
    const database = await getDatabase();
    let query = "INSERT INTO user VALUES(null, '" + user.mail + "', '" + user.name + "', '" + user.password + "', '1');"
    return new Promise((resolve, reject) => {
        database.query(query, (err, rows) => {
            if (!err) {
                let selectUserQuery = "SELECT user.id, user.mail, user.name, user.password, user.role FROM user WHERE id = '" + rows.insertId + "';"
                database.query(selectUserQuery, (err, rows) => {
                    if (!err) {
                        resolve(rows);
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

module.exports = {
    login,
    signup
}