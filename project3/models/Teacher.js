require("../config/database");
const mongoose = require("mongoose");

const Teacher = mongoose.Schema({
    name : String,
    salary : Number,
    address : String
})

module.exports = mongoose.model("teacher", Teacher);