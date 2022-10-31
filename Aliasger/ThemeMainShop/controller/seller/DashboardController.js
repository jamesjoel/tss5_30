const routes = require("express").Router();
const Signup = require("../../models/Signup");

routes.get("/", (req, res) => {
    Signup.find({}, (error, result) => {
        var pagedata = { result: result };
        res.render("pages/seller/dashboard", pagedata);
    })
})

module.exports = routes;