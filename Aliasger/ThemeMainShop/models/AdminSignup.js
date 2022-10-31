const mongoose = require("mongoose");

require("../config/database");

const Seller = mongoose.Schema({
    username: String,
    email: String,
    password: String
}, { collection: "seller" })

module.exports = mongoose.model("seller", Seller);

