const mongoose = require("mongoose");
require("../config/database");

const Images = mongoose.Schema({
    title : String,
    image :String
})

module.exports = mongoose.model("image",Images)