const express = require('express');
const router = express.Router();

// Irrigation Schedule Endpoint
router.get('/irrigation-schedule', (req, res) => {
    // Logic to retrieve irrigation schedule
    const irrigationSchedule = [
        { id: 1, startTime: '2026-04-05T08:00:00Z', duration: 30 },
        { id: 2, startTime: '2026-04-05T14:00:00Z', duration: 30 },
    ];
    res.json(irrigationSchedule);
});

// Farm Automation Schedule Endpoint
router.get('/farm-automation-schedule', (req, res) => {
    // Logic to retrieve farm automation schedule
    const automationSchedule = [
        { id: 1, task: 'Fertilize Crops', time: '2026-04-05T09:00:00Z' },
        { id: 2, task: 'Harvest Crops', time: '2026-04-05T15:00:00Z' },
    ];
    res.json(automationSchedule);
});

module.exports = router;