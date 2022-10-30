const routes = require("express").Router();

routes.get("/", (req, res) => {
    res.render("pages/buyer/about");
})

module.exports = routes;