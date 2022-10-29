const routes = require("express").Router();

// const HomeCtrl = require("../controllers/HomeController");
// routes.use("/", HomeCtrl);

routes.use("/", require("../controllers/HomeController"));
routes.use("/about", require("../controllers/AboutController"));
routes.use("/contact", require("../controllers/ContactController"));
routes.use("/Student", require("../controllers/StudentController"));



module.exports = routes;
