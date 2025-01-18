const { Schema, model } = require("mongoose");

const accountSchema = new Schema({
    id: {
        type: Schema.Types.ObjectId
    },
    username: {
        type: String,
        required: [true, "Please include thet username"]
    },
    email: {
        type: String,
        required: [true, "Please enter your email address"]
    },
}, { timestamps: true });

const AccountModel = model("Account", accountSchema)

module.exports = AccountModel