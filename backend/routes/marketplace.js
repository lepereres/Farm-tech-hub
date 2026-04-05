const express = require('express');
const router = express.Router();

// Sample data
let products = [
    { id: 1, name: 'Tractor', price: 15000 },
    { id: 2, name: 'Seeder', price: 2000 },
    { id: 3, name: 'Plow', price: 1200 }
];

// Get all products
router.get('/products', (req, res) => {
    res.json(products);
});

// Get a product by ID
router.get('/products/:id', (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (!product) return res.status(404).send('Product not found.');
    res.json(product);
});

// Create a new product
router.post('/products', (req, res) => {
    const newProduct = {
        id: products.length + 1,
        name: req.body.name,
        price: req.body.price
    };
    products.push(newProduct);
    res.status(201).json(newProduct);
});

// Update an existing product
router.put('/products/:id', (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (!product) return res.status(404).send('Product not found.');
    product.name = req.body.name;
    product.price = req.body.price;
    res.json(product);
});

// Delete a product
router.delete('/products/:id', (req, res) => {
    const productIndex = products.findIndex(p => p.id === parseInt(req.params.id));
    if (productIndex === -1) return res.status(404).send('Product not found.');
    products.splice(productIndex, 1);
    res.status(204).send();
});

module.exports = router;