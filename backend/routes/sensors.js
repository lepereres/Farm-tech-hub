// routes/sensors.js

const express = require('express');
const router = express.Router();

// Mock sensor data
let sensors = [
    { id: 1, type: 'temperature', value: 22.5, unit: 'C' },
    { id: 2, type: 'humidity', value: 60, unit: '%' },
    { id: 3, type: 'soil_moisture', value: 30, unit: '%' }
];

// GET all sensor data
router.get('/', (req, res) => {
    res.json(sensors);
});

// GET sensor by ID
router.get('/:id', (req, res) => {
    const sensor = sensors.find(s => s.id === parseInt(req.params.id));
    if (!sensor) return res.status(404).send('Sensor not found');
    res.json(sensor);
});

// POST new sensor data
router.post('/', (req, res) => {
    const newSensor = {
        id: sensors.length + 1,
        type: req.body.type,
        value: req.body.value,
        unit: req.body.unit
    };
    sensors.push(newSensor);
    res.status(201).json(newSensor);
});

// PUT update sensor data
router.put('/:id', (req, res) => {
    const sensor = sensors.find(s => s.id === parseInt(req.params.id));
    if (!sensor) return res.status(404).send('Sensor not found');

    sensor.type = req.body.type;
    sensor.value = req.body.value;
    sensor.unit = req.body.unit;
    res.json(sensor);
});

// DELETE sensor
router.delete('/:id', (req, res) => {
    const sensorIndex = sensors.findIndex(s => s.id === parseInt(req.params.id));
    if (sensorIndex === -1) return res.status(404).send('Sensor not found');
    sensors.splice(sensorIndex, 1);
    res.status(204).send();
});

module.exports = router;