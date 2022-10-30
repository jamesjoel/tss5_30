const routes = require("express").Router();

routes.get("/", (req, res) => {
    res.render("pages/seller/index");
})

module.exports = routes;