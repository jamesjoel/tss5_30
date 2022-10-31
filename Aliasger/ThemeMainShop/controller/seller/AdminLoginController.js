const routes = require("express").Router();
const AdminSignup = require("../../models/AdminSignup");

routes.get("/", (req, res) => {
    res.render("pages/seller/admin-login");
})

routes.post("/adminsignup", (req, res) => {
    AdminSignup.create(req.body, (error) => {
        res.redirect("/myaccount/dashboard");
    })
})
module.exports = routes;