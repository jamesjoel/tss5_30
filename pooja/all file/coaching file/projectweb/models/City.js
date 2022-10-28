const mongoose = require("mongoose");
require("../config/database")

const City = mongoose.Schema({
    id : String,
    name :String,
    state: String

})

module.exports = mongoose.model("city",City);