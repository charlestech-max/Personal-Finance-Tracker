const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/financeTracker', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});



// Routes
const expensesRoute = require('./routes/expenses');
const insightsRoute = require('./routes/insights');
app.use('/api/expenses', expensesRoute);
app.use('/api/insights', insightsRoute);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});