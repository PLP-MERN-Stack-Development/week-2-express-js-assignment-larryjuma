const auth = require('../middleware/auth');
const validate = require('../middleware/validateProduct');
const { NotFoundError, ValidationError } = require('../utils/errors');



const express = require('express');
const { v4: uuidv4 } = require('uuid');

const router = express.Router();

// Temporary in-memory product list
let products = [];

// GET /api/products - List all products
router.get('/', (req, res) => {
  res.json(products);
});

// GET /api/products/:id - Get product by ID
router.get('/:id', (req, res) => {
  const product = products.find(p => p.id === req.params.id);
  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }
  res.json(product);
});

// POST /api/products - Create a new product
router.post('/', (req, res) => {
  const { name, description, price, category, inStock } = req.body;

  const newProduct = {
    id: uuidv4(),
    name,
    description,
    price,
    category,
    inStock,
  };

  products.push(newProduct);
  res.status(201).json(newProduct);
});

// PUT /api/products/:id - Update a product
router.put('/:id', (req, res) => {
  const index = products.findIndex(p => p.id === req.params.id);
  if (index === -1) {
    return res.status(404).json({ message: 'Product not found' });
  }

  const { name, description, price, category, inStock } = req.body;

  products[index] = {
    id: req.params.id,
    name,
    description,
    price,
    category,
    inStock,
  };

  res.json(products[index]);
});

// DELETE /api/products/:id - Delete a product
router.delete('/:id', (req, res) => {
  const index = products.findIndex(p => p.id === req.params.id);
  if (index === -1) {
    return res.status(404).json({ message: 'Product not found' });
  }

  products.splice(index, 1);
  res.json({ message: 'Product deleted' });
});

module.exports = router;



// Global error handler
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || 'Something went wrong';
  res.status(status).json({ error: message });
});
