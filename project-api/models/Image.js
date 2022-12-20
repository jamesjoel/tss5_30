require("../config/database");
let mongoose = require("mongoose");

let Image = mongoose.Schema({
    name : String
})

module.exports = mongoose.model("image", Image);