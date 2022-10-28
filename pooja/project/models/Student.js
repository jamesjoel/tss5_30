const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/tss_new");

const a = mongoose.Schema({
    fullname : String,
    age : Number,
    fee : Number,
    city : String,
    address : String,
    skills : Array,
    gender : String
})

module.exports = mongoose.model("student", a);