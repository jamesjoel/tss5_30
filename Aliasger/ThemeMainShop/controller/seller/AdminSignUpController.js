const routes = require("express").Router();
const AdminSignup = require("../../models/AdminSignup");

routes.get("/", (req, res) => {
    AdminSignup.find({}, (error, result) => {
        var pagedata = { result: result };
        res.render("pages/seller/admin-signup", pagedata);
    })
})

routes.post("/", (req, res) => {
    AdminSignup.create(req.body, (error) => {
        res.redirect("/sign/admin-signup");
    })
})
module.exports = routes;