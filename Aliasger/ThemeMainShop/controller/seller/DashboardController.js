const routes = require("express").Router();
const { Admin } = require("mongodb");
const AdminSignup = require("../../models/AdminSignup");
const Signup = require("../../models/Signup");

routes.get("/", (req, res) => {
    res.render("pages/seller/dashboard");
})
routes.get("/send/:a", (req, res) => {
    var id = req.params.a;
    return;
    AdminSignup.find({ _id: id }, (error, result) => {
        var pagedata = { result: result[0] };
        res.render("pages/seller/dashboard", pagedata);
    })
})

module.exports = routes;