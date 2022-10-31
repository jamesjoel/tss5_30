const routes = require("express").Router();
const Signup = require("../../models/Signup");

routes.get("/", (req, res) => {
    res.render("pages/seller/admin-login");
})

module.exports = routes;