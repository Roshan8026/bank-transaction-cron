// models/accountModel.js
const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
    account: { type: String, required: true }
});

module.exports = mongoose.model('Account', accountSchema);

