const routes = require("express").Router();
const AdminSignup = require("../../models/AdminSignup");

// routes.get("/", (req, res) => {
//     res.render("pages/seller/dashboard");
// })

routes.post("/admin", (req, res) => {
    AdminSignup.create(req.body, (error) => {
        res.redirect("/adminlogin");
    })
})

routes.get("/show", (req, res) => {
    AdminSignup.find({}, (error, result) => {
        var pagedata = { result: result }
        res.render("pages/seller/dashboard", pagedata);
    })
})
module.exports = routes;