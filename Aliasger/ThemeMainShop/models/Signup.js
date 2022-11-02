const mongoose = require("mongoose");

require("../config/database");

const Signup = mongoose.Schema({
    fname: String,
    lname: String,
    email: String,
    phone: Number,
    password: String
}, { collection: "signup" })

module.exports = mongoose.model("signup", Signup);