const routes = require("express").Router();

routes.get("/", (req, res) => {
    res.render("pages/help");
})

module.exports = routes;