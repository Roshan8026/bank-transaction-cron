// server.js
const express = require('express');
const connectDB = require('./config/db');
const scheduleDailyJob = require('./cron/transactionCron');
const accountRoutes = require('./routes/accountRoutes'); // Ensure correct path

const app = express();

// Use the account routes
app.use('/api/accounts', accountRoutes);

// Connect to database
connectDB();

// Schedule the daily job
scheduleDailyJob();

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
