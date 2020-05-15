const mysql = require("mysql");

/**
 * local connection
 */
/*
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admin",
  database: "pics_and_places",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});*/

/**
 *  HSB Connection
 */
const connection = mysql.createConnection({
  host: "195.37.176.178",
  port: 20133,
  user: "Gruppe2",
  password: "$dl5VX%wcwCmKymlP=`OSy1B'SMUmWp$",
  database: "20_Gruppe2_DB",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

let database = null;

async function startDatabase() {
  connection.connect(err => {
    if (!err) {
      console.log("Database is connected...");
      database = connection;
    } else {
      console.log("Error connecting database..." + err.message);
    }
  });
}

async function getDatabase() {
  if (!database) await startDatabase();
  return database;
}

module.exports = {
  getDatabase,
  startDatabase
};
