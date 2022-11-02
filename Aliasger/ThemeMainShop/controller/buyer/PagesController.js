const routes = require("express").Router();

routes.get("/cart", (req, res) => {
    res.render("pages/buyer/cart");
})
routes.get("/checkout", (req, res) => {
    res.render("pages/buyer/checkout");
})

module.exports = routes;