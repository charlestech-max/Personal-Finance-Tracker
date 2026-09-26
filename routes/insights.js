const express = require('express');
const router = express.Router();
const getInsights = require('../utils/machineLearning'); // placeholder function

// Get predictive insights
router.get('/', async (req, res) => {
    try {
        const insights = await getInsights();
        res.json(insights);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;