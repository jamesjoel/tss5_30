const routes = require("express").Router();

routes.get("/", (req, res) => {
    res.render("pages/faq");
})

module.exports = routes;