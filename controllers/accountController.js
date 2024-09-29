const Account = require('../models/accountModel'); // Ensure correct path to accountModel

// Function to insert account data
const insertAccounts = async (req, res) => {
    const accounts = [
      { account: 'Test_232323344444444444441' },
      { account: 'Test_232323344444444444442' },
      { account: 'Test_232323344444444444443' },
      { account: 'Test_232323344444444444444' },
      { account: 'Test_232323344444444444445' },
      { account: 'Test_232323344444444444446' },
      { account: 'Test_232323344444444444447' },
      { account: 'Test_232323344444444444448' },
      { account: 'Test_232323344444444444449' },
      { account: 'Test_232323344444444444410' },
      { account: 'Test_232323344444444444411' },
      { account: 'Test_232323344444444444412' },
      { account: 'Test_232323344444444444413' }
    ];

    try {
        // Insert accounts into the database
        await Account.insertMany(accounts);
        return res.status(201).json({ message: 'Accounts inserted successfully' });
    } catch (err) {
        return res.status(500).json({ message: 'Error inserting accounts', error: err });
    }
};

module.exports = { insertAccounts };
