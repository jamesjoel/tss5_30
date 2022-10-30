const routes = require("express").Router();

routes.get("/", (req, res) => {
    res.render("pages/buyer/shop");
})

module.exports = routes;