const routes = require("express").Router();

routes.get("/cart", (req, res) => {
    res.render("pages/cart");
})
routes.get("/checkout", (req, res) => {
    res.render("pages/checkout");
})

module.exports = routes;