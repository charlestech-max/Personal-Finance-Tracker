const express = require('express');
const router = express.Router();
const Expense = require('../models/Expense');

// Create an expense
router.post('/', async (req, res) => {
    const { category, amount, date, description } = req.body;
    const newExpense = new Expense({ category, amount, date, description });

    try {
        const savedExpense = await newExpense.save();
        res.json(savedExpense);
    } catch (err) {
        res.status(500).json(err);
    }
});


// Get all expenses
router.get('/expense', async (req, res) => {
    try {
        const expenses = await Expense.find();
        res.json(expenses);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
