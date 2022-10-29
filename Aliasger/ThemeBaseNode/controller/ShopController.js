const routes = require("express").Router();

routes.get("/", (req, res) => {
    res.render("pages/shop");
})

module.exports = routes;