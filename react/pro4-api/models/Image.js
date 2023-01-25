const mongoose = require("mongoose");
require("../config/database");

const Image = mongoose.Schema({
    name :  String,
    image : String
});

module.exports = mongoose.model("image", Image);