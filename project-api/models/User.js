require("../config/database");
const mongoose = require("mongoose");
const User = mongoose.Schema({
    name : String,
    email : String,
    password : String,
    address : String,
    state : String,
    city : String,
    gender : String,
    contact : String
})

module.exports = mongoose.model("user", User);