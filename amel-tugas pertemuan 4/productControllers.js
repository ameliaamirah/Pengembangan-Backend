const fs = require("fs");
const path = require("path");
const dataPath = path.join(__dirname, "data.json");

const readData = () => {
  const data = fs.readFileSync(dataPath);
  return JSON.parse(data);
};

const writeData = (data) => {
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
};

// GET all products
exports.getAllProducts = (req, res) => {
  const products = readData();
  res.json(products);
};

// GET product by ID
exports.getProductById = (req, res) => {
  const products = readData();
  const product = products.find((p) => p.id == req.params.id);
  if (!product) return res.status(404).json({ message: "Product not found" });
  res.json(product);
};

// POST create product
exports.createProduct = (req, res) => {
  const products = readData();
  const newProduct = { id: products.length + 1, ...req.body };
  products.push(newProduct);
  writeData(products);
  res.status(201).json({ message: "Product created successfully", newProduct });
};

// PUT update product
exports.updateProduct = (req, res) => {
  let products = readData();
  const index = products.findIndex((p) => p.id == req.params.id);
  if (index === -1) return res.status(404).json({ message: "Product not found" });

  products[index] = { ...products[index], ...req.body };
  writeData(products);
  res.json({ message: "Product updated successfully", product: products[index] });
};

// DELETE product
exports.deleteProduct = (req, res) => {
  let products = readData();
  const newProducts = products.filter((p) => p.id != req.params.id);
  if (products.length === newProducts.length)
    return res.status(404).json({ message: "Product not found" });

  writeData(newProducts);
  res.json({ message: "Product deleted successfully" });
};
