const mongoose = require("mongoose");

const User = mongoose.Schema({
    name : String,
    age : Number,
    city : String

});

module.exports = mongoose.model("user", User);