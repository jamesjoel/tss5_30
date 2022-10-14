const routes = require("express").Router()

// const HomeCtrl = require("../controllers/HomeController")

routes.use("/", require("../controllers/HomeController"));
routes.use("/about", require("../controllers/AboutController"));
routes.use("/contact" , require("../controllers/ContactController"));
routes.use("/student", require("../controllers/StudentController"));

module.exports = routes;
