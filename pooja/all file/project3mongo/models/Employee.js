require("../config/database");
const mongoose = require("mongoose");
// mongoose.connect("mongodb://localhost:27017/tss_pooja")

const Employee = mongoose.Schema({
    name:String,
    salary:Number,
    city: String
})

module.exports = mongoose.model("employee" , Employee)