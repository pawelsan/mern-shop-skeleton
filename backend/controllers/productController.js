const asyncHandler = require("express-async-handler");

const Product = require("../models/productModel");

// @desc Get products
// @route GET /api/products
// @access Private

const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find();

  res.status(200).json(products);
});

// @desc Create product
// @route POST /api/products
// @access Private

const createProduct = asyncHandler(async (req, res) => {
  if (!req.body.name) {
    res.status(400);
    throw Error("Please add a name field");
  }

  const product = await Product.create({
    name: req.body.name,
    category: req.body.category,
    ingredients: req.body.ingredients,
    price: req.body.price,
  });

  res.status(200).json(product);
});

// @desc Update products
// @route PUT /api/products/:id
// @access Private

const updateProduct = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update product ${req.params.id}` });
});

// @desc Delete products
// @route DELETE /api/products/:id
// @access Private

const deleteProduct = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete product ${req.params.id}` });
});

module.exports = {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
};
