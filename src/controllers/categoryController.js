const {
  insertCategory,
  getCategories,
  getCategoryById,
  deleteCategory,
  updateCategory,
} = require("../database/category");

var Category = require("../models/category");

exports.get_categories = async (req, res) => {
  const result = await getCategories();
  res.json(result);
};

exports.get_category_by_id = async (req, res) => {
  const result = await getCategoryById(req.params.id);
  res.json(result[0]);
};

exports.insert_category = async (req, res) => {
  res.send(await insertCategory(req.body.name));
};

exports.update_category = async (req, res) => {
  console.log(req.body);
  res.send(await updateCategory(req.params.id, req.body.name));
};

exports.delete_category = async (req, res) => {
  res.send(await deleteCategory(req.params.id));
};
