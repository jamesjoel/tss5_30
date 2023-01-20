require("../config/database");
const mongoose = require("mongoose");

const User = mongoose.Schema({
    fullname : String,
    email : String,
    password : String,
    contact : String
})

module.exports = mongoose.model("user", User);