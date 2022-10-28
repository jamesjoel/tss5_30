const mongoose = require("mongoose");
require("../config/database")

const a = mongoose.Schema({
    fullname : String,
    age : Number,
    fee : Number,
    city : String,
    address : String,
    skills : Array,
    gender : String
},{collection:"city"})

module.exports = mongoose.model("student", a);