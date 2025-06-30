
const express = require('express');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/products'); // ← Import the route file

const app = express();

app.use(bodyParser.json());

// Mount the products route under /api/products
app.use('/api/products', productRoutes);

app.get('/', (req, res) => {
  res.send('Hello World');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const logger = require('./middleware/logger');
app.use(logger); // This logs every request
