const mongoose = require("mongoose");

require("../config/database");

const Contact = mongoose.Schema({
    name: String,
    email: String,
    subject: String,
    message: String
}, { collection: "contact" })

module.exports = mongoose.model("contact", Contact);