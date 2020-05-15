const {
  insertCategory,
  getCategories,
  getCategoryById,
  deleteCategory,
  updateCategory,
} = require("../database/category");

exports.get_categories = async (req, res) => {
  await getCategories().then(result => {
    res.json(result);
  }).catch(error => {
    res.send(error)
  });

};

exports.get_category_by_id = async (req, res) => {
  await getCategoryById(req.params.id).then(result => {
    res.json(result[0]);
  }).catch(error => {
    res.send(error);
  });

};

exports.insert_category = async (req, res) => {
  await insertCategory(req.body.name).then(result => {
    res.send(result);
  }).catch(error => {
    res.send(error);
  })
};

exports.update_category = async (req, res) => {
  await updateCategory(req.params.id, req.body.name).then(result => {
    res.send(result);
  }).catch(error => {
    res.send(error);
  })
  console.log(req.body);

};

exports.delete_category = async (req, res) => {
  await deleteCategory(req.params.id).then(result => {
    res.send(result, res.status);
  }).catch(error => {
    res.send(error);
  })
};
