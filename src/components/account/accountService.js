const AccountModel = require("../../models/accountModel.js");
const bycryptjs = require('bcryptjs')


const createAccountService = async (body) => {
    const auth = new AccountModel(body)
    // const salt = bycryptjs.genSaltSync(10)
    // const hashedPassword = bycryptjs.hashSync(body.password, salt)
    // auth.password = hashedPassword
    await auth
        .save()
        .then((result) => {
            console.log(result, "Account created successfully")
        })
    return auth
}

const getAllAccountsService = async () => {
    const allAccount = AccountModel.find()
    return allAccount
}

////////////change password
const encryptPasswordService = async (body) => {
    const salt = bycryptjs.genSaltSync(10)
    const hashedPassword = bycryptjs.hashSync(body, salt)
    return hashedPassword
}

////////////if the account exist
const accountExistService = async (email) => {
    const findAccount = await AccountModel.findOne({ email })
    if (!findAccount || !findAccount.email) {
        return false
    } else {
        return true
    }
}

const getAccountByEmail = async (email) => {
    const findAccount = await AccountModel.findOne({ email })
    console.log(email, findAccount, "account service")
    if (!findAccount || !findAccount.email) {
        return false
    } else {
        return (true, findAccount)
    }
}

module.exports = {
    createAccountService,
    encryptPasswordService,
    getAllAccountsService,
    accountExistService,
    getAccountByEmail
}