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

async function changePassword(userId, password) {
    const database = await getDatabase();
    let query = "UPDATE user SET password = '" + password + "' WHERE id = '" + userId + "'";
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

async function getPasswordHash(userId) {
    const database = await getDatabase();
    let query = "SELECT password FROM user WHERE id = '" + userId + "'";
    return new Promise((resolve, reject) => {
        database.query(query, (err, rows) => {
            if (!err) {
                resolve(rows[0]);
            } else {
                reject(err);
            }
        });
    });
}

async function getUserInfo(userId) {
    const database = await getDatabase();
    let query = "SELECT id, name, mail, role FROM user WHERE id = '" + userId + "'";
    return new Promise((resolve, reject) => {
        database.query(query, (err, rows) => {
            if (!err) {
                resolve(rows[0]);
            } else {
                reject(err);
            }
        });
    });
}



module.exports = {
    login,
    signup,
    changePassword,
    getPasswordHash,
    getUserInfo
}