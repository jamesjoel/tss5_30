const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/project");


const mongoose_data = mongoose.Schema({
fullname : String,
salary : Number,
day : Number,
year : Number,
month : String,
city : String,
address : String,

})

module.exports = mongoose.model("teacher", mongoose_data);