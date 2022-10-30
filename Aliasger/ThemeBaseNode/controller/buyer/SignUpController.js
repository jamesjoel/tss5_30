const routes = require("express").Router();
const Signup = require("../../models/Signup");
routes.get("/", (req, res) => {
    res.render("pages/buyer/signup");
})

routes.post("/", (req, res) => {
    Signup.create(req.body, (error) => {
        res.redirect("/myaccount/signup");
    })
})
module.exports = routes;