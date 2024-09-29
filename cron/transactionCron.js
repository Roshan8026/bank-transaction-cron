// cron/transactionCron.js

const cron = require('node-cron');
const Transaction = require('../models/transactionModel'); // Ensure correct path to transaction model
const Account = require('../models/accountModel'); // Ensure correct path to account model

// Function to schedule the daily transaction job
const scheduleDailyJob = () => {
    // Schedule job to run every minute for testing purposes    // Schedule job to run at 9 AM every day '* * * * *'
    cron.schedule('0 9 * * *', async () => {  // Run cron every minute  
        try {
            console.log('Starting daily transaction job...');

            // Fetch all accounts from the database
            const accounts = await Account.find({});
            const totalTransactions = 180;

            // Calculate the number of transactions per account
            const transactionsPerAccount = Math.floor(totalTransactions / accounts.length); // Base transactions per account
            const remainingTransactions = totalTransactions % accounts.length; // Remaining transactions to distribute

            // Loop through each account and create transactions
            for (const account of accounts) {
                for (let i = 0; i < transactionsPerAccount; i++) {
                    const transaction = new Transaction({
                        account: account.account, // Set the account field correctly
                        amount: Math.floor(Math.random() * 1000) + 1, // Random amount for demo
                        date: new Date(),
                    });
                    await transaction.save(); // Save the transaction to the database
                }
            }

            // Distribute the remaining transactions randomly across accounts
            for (let i = 0; i < remainingTransactions; i++) {
                const randomIndex = Math.floor(Math.random() * accounts.length);
                const randomAccount = accounts[randomIndex];
                
                const transaction = new Transaction({
                    account: randomAccount.account, // Set the account field correctly
                    amount: Math.floor(Math.random() * 1000) + 1, // Random amount for demo
                    date: new Date(),
                });
                await transaction.save(); // Save the transaction to the database
            }

            console.log('Daily transaction job completed successfully!');
        } catch (err) {
            console.error('Error during transaction job:', err);
        }
    });
};

module.exports = scheduleDailyJob;
