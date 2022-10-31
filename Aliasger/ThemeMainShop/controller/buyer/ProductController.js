const routes = require("express").Router();

routes.get("/", (req, res) => {
    res.render("pages/buyer/detail");
})

module.exports = routes;