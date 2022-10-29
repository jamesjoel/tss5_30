const routes = require("express").Router();

routes.use("/",require("../controller/HomeController"));
routes.use("/about",require("../controller/AboutController"));
routes.use("/employee", require("../controller/EmployeeController"));

module.exports = routes;