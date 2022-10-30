const routes = require("express").Router();
const Contact = require("../../models/Contact");

routes.get("/", (req, res) => {
    res.render("pages/buyer/contact");
})

routes.post("/", (req, res) => {
    Contact.create(req.body, (error) => {
        res.redirect("/contact");
    })
})
module.exports = routes;