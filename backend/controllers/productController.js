// @desc Get products
// @route GET /api/products
// @access Private

const getProducts = (req, res) => {
  res.status(200).json({ message: "Get products" });
};

// @desc Create product
// @route POST /api/products
// @access Private

const createProduct = (req, res) => {
  res.status(200).json({ message: "Create products" });
};

// @desc Update products
// @route PUT /api/products/:id
// @access Private

const updateProduct = (req, res) => {
  res.status(200).json({ message: `Update product ${req.params.id}` });
};

// @desc Delete products
// @route DELETE /api/products/:id
// @access Private

const deleteProduct = (req, res) => {
  res.status(200).json({ message: `Delete product ${req.params.id}` });
};

module.exports = {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
};
