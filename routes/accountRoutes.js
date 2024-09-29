const express = require('express');
const { insertAccounts } = require('../controllers/accountController'); // Ensure correct path to accountController

const router = express.Router();

// Route to insert accounts
router.post('/insert-accounts', insertAccounts);

module.exports = router;
