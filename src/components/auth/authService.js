const JWT = require('jsonwebtoken');


const createAssessToken = async (accountEmail) => {
    // const userDetail = await AccountModel.find({email: accountEmail})
    ///JWT token is created here
    const assessToken = await JWT.sign(
        { accountEmail },
        process.env.JWT_SECRET,
        {
            expiresIn: "3h"
        }
    );
    return assessToken
}

module.exports = {
    createAssessToken
}