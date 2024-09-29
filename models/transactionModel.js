// models/transactionModel.js

const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    account: { type: String, required: true }, // Ensure this matches the field you're trying to set
    amount: { type: Number, required: true },
    date: { type: Date, required: true },
});

const Transaction = mongoose.model('Transaction', transactionSchema);
module.exports = Transaction;
