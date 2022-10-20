require("../config/database");
const mongoose = require("mongoose");
const Employee = mongoose.Schema({
    name : String,
    salary : Number,
    city : String
})

module.exports = mongoose.model("employee", Employee);
