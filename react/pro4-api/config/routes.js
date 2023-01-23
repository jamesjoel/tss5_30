const routes = require("express").Router();


routes.use("/api/signup", require("../controllers/SignupController"));
routes.use("/api/login", require("../controllers/LoginController"));
routes.use("/api/city", require("../controllers/CityController"));


module.exports = routes;