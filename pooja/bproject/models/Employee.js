require("../config/database")
const mongoose = require("mongoose");

const Employee =mongoose.Schema({
    name:String,
    salary:Number,
    address:String
});

module.exports = mongoose.model("data", Employee);