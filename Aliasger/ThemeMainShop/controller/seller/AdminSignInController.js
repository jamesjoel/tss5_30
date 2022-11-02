const routes = require("express").Router();

routes.get("/", (req, res) => {
    res.render("pages/seller/admin-signin");
})

module.exports = routes;