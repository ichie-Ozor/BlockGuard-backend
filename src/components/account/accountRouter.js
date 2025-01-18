const express = require('express')
const accountController = require('./accountController.js')

const { createAccount,
    getAllAcountController,
    getAccountByEmailController
} = accountController;

const accountRoute = express.Router();

accountRoute.route('/').post(createAccount).get(getAllAcountController)
accountRoute.route('/:email').get(getAccountByEmailController)

module.exports = accountRoute