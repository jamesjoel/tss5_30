const routes = require("express").Router();

routes.get("/", (req, res) => {
    res.render("pages/buyer/index");
})

module.exports = routes;