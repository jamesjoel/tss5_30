const routes = require("express").Router();

routes.get("/", (req, res) => {
    res.render("pages/signup");
})


module.exports = routes;