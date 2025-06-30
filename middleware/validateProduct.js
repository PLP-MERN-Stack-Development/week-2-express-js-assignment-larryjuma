module.exports = (req, res, next) => {
  const { name, description, price, category, inStock } = req.body;

  if (
    !name || !description || price == null || !category ||
    typeof inStock !== 'boolean'
  ) {
    return res.status(400).json({ message: 'Invalid product data' });
  }

  next();
};
