const routes = require("express").Router();
//english
routes.use("/", require("../controller/HomeController"));
routes.use("/contact", require("../controller/ContactController"));
routes.use("/shop", require("../controller/ShopController"));
routes.use("/product", require("../controller/ProductController"));
routes.use("/pages", require("../controller/PagesController"));
routes.use("/about", require("../controller/AboutController"));
routes.use("/help", require("../controller/HelpController"));
routes.use("/faq", require("../controller/FaqController"));
routes.use("/myaccount", require("../controller/MyAccountController"));
routes.use("/dashboard", require("../controller/DashboardController"));


module.exports = routes;