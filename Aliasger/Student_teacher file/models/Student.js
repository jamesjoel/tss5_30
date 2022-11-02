const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/project");


const mongoose_data = mongoose.Schema({
fullname : String,
age : Number,
fee : Number,
gender : String,
city : String,
address : String,
skills : Array

})

module.exports = mongoose.model("student", mongoose_data);