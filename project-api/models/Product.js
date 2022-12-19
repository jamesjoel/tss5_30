require("../config/database");
const mongoose = require("mongoose");
const Product = mongoose.Schema({
    title : String,
    price : Number,
    category : String,
    detail : String,
    discount : Number,
    feature : String,
    image : String
})

module.exports = mongoose.model("product", Product);