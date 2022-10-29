const mongoose = require("mongoose");
require("../config/database")

const Employee = mongoose.Schema({

    name:String,
    salary:Number,
    city:String
})

module.exports =mongoose.model("employee" , Employee)

