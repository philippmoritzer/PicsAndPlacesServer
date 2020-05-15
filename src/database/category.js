const { getDatabase } = require("./mysql");

async function getCategories() {
  const database = await getDatabase();
  return new Promise((resolve, reject) => {
    database.query(
      "SELECT * FROM pics_and_places.category;",
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

async function getCategoryById(id) {
  const database = await getDatabase();
  return new Promise((resolve, reject) => {
    database.query(
      "SELECT * FROM pics_and_places.category WHERE id = " + id + ";",
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

async function insertCategory(name) {
  const database = await getDatabase();

  return new Promise((resolve, reject) => {
    database.query(
      "INSERT INTO pics_and_places.category VALUES (null, '" + name + "');",
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

async function updateCategory(id, name) {
  const database = await getDatabase();

  return new Promise((resolve, reject) => {
    database.query(
      "UPDATE pics_and_places.category SET name = '" +
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

async function deleteCategory(id) {
  const database = await getDatabase();

  return new Promise((resolve, reject) => {
    database.query(
      "DELETE FROM pics_and_places.category WHERE id = '" + id + "';",
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
  getCategories,
  getCategoryById,
  insertCategory,
  updateCategory,
  deleteCategory
};
