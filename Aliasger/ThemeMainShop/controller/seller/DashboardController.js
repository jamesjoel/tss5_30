const routes = require("express").Router();
const AdminSignup = require("../../models/AdminSignup");

routes.get("/", (req, res) => {
    res.render("pages/seller/dashboard");
})

// routes.post("/admin", (req, res) => {
//     AdminSignup.create(req.body, (error) => {
//         res.redirect("/adminlogin");
//     })
// })

module.exports = routes;