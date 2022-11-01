const routes = require("express").Router();

// const HomeCtrl = require("../controllers/HomeController");
// routes.use("/", HomeCtrl);

routes.use("/", require("../controllers/HomeController"));
routes.use("/about", require("../controllers/AboutController"));
routes.use("/contact", require("../controllers/ContactController"));
routes.use("/student", require("../controllers/StudentController"));
// routes.use("/images", require("../controllers/ImagesController"));
routes.use("/images", require("../controllers/ImageController"))



module.exports = routes;