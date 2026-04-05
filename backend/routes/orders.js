const express = require('express');
const router = express.Router();

// Sample in-memory orders data
let orders = [];

// Fetch all orders
router.get('/', (req, res) => {
    res.status(200).json(orders);
});

// Create a new order
router.post('/', (req, res) => {
    const newOrder = {
        id: orders.length + 1,
        ...req.body,
    };
    orders.push(newOrder);
    res.status(201).json(newOrder);
});

// Fetch a specific order by ID
router.get('/:orderId', (req, res) => {
    const order = orders.find(o => o.id === parseInt(req.params.orderId));
    if (!order) return res.status(404).send('Order not found');
    res.status(200).json(order);
});

// Update a specific order by ID
router.put('/:orderId', (req, res) => {
    const order = orders.find(o => o.id === parseInt(req.params.orderId));
    if (!order) return res.status(404).send('Order not found');

    Object.assign(order, req.body);
    res.status(200).json(order);
});

// Delete a specific order by ID
router.delete('/:orderId', (req, res) => {
    const orderIndex = orders.findIndex(o => o.id === parseInt(req.params.orderId));
    if (orderIndex === -1) return res.status(404).send('Order not found');

    orders.splice(orderIndex, 1);
    res.status(204).send(); // No content
});

// Track a specific order by ID
router.get('/:orderId/tracking', (req, res) => {
    const order = orders.find(o => o.id === parseInt(req.params.orderId));
    if (!order) return res.status(404).send('Order not found');
    
    // Sample tracking information
    res.status(200).json({ orderId: order.id, status: 'In Transit' });
});

module.exports = router;