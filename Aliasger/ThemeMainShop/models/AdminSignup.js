const mongoose = require("mongoose");

require("../config/database");

const Seller = mongoose.Schema({
    fname: String,
    lname: String,
    email: String,
    phone: Number,
    password: String
}, { collection: "seller" })

module.exports = mongoose.model("seller", Seller);

