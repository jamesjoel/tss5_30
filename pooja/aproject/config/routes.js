
const routes = require("express").Router();

routes.use("/",require("../controller/HomeController"));
routes.use("/employee",require("../controller/EmployeeController"));
routes.use("/image",require("../controller/IamgeController"))



module.exports =routes;