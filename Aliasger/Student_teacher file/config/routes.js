const { application } = require("express");

const routes = require("express").Router();

routes.use("/", require("../controller/HomeController"));
routes.use("/about", require("../controller/AboutController"));
routes.use("/student", require("../controller/StudentController"));
routes.use("/teacher", require("../controller/TeacherController"));


module.exports = routes;