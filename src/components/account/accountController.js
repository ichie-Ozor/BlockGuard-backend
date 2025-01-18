const JWT = require('jsonwebtoken')
const {
    createAccountService,
    accountExistService,
    getAccountByEmail,
    getAllAccountsService,
    encryptPasswordService
} = require('./accountService.js')
const bycryptjs = require('bcryptjs')
const { v4: uuidv4 } = require('uuid')
const { createAssessToken } = require('../auth/authService.js')

const createAccount = async (req, res) => {
    const { email, username, description } = req.body
    if (!email || !username || !description) {
        return res.json({
            status: "failed",
            message: "Incomplete credentials, please complete the inputs"
        })
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
        res.json({
            status: "Failed",
            message: "Invalid email entered"
        })
    }
    else if (!/^[a-zA-Z ]*$/.test(username)) {
        res.json({
            status: "Failed",
            message: "Invalid username entered"
        })
    }
    const accountExist = await accountExistService(email)
    if (accountExist) {
        return res.json({
            status: "failed",
            message: "An account with this email already exist"
        })
    } else if (!accountExist) {
        const newUser = await createAccountService(req.body)
        const assessToken = await createAssessToken(email)
        return res.json({
            status: "Success",
            message: "new account created successfully",
            assessToken
        })
    } else {
        res.json({
            status: "Failed",
            message: "Account creation failed"
        })
    }
}


const getAllAcountController = async (req, res) => {
    try {
        const allAccount = await getAllAccountsService()
        console.log(allAccount, "all account")
        res.json({
            status: "Success",
            message: "All account fetched successfully",
            allAccount,
        })
    } catch (error) {
        res.json({
            status: "Failed",
            message: "Internal server error"
        })
    }
}

const getAccountByEmailController = async (req, res) => {
    const { email } = req.params
    // console.log(req)
    if (email) {
        const getAccount = await getAccountByEmail(email)
        res.json({
            status: "Success",
            message: `${email} retrieved successfully`,
            getAccount
        })
    } else {
        res.json({
            status: "Failed",
            message: "Sorry we could not get the account you seek"
        })
    }
}

module.exports = {
    createAccount,
    getAllAcountController,
    getAccountByEmailController
}