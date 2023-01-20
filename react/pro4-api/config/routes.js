const routes = require("express").Router();


routes.use("/api/signup", require("../controllers/SignupController"));
routes.use("/api/login", require("../controllers/LoginController"));


module.exports = routes;