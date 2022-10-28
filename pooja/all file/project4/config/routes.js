const routes = require("express").Router;

routes.use("/", require("../controllers/HomeController"));
routes.use("/employee", require("../controllers/EmployeeController"));
routes.use("/about", require("../controllers/AboutController"));

module.exports=routes;
