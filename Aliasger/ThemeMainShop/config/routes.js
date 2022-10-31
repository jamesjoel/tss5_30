const routes = require("express").Router();
//buyer
routes.use("/", require("../controller/buyer/HomeController"));
routes.use("/contact", require("../controller/buyer/ContactController"));
routes.use("/shop", require("../controller/buyer/ShopController"));
routes.use("/product", require("../controller/buyer/ProductController"));
routes.use("/pages", require("../controller/buyer/PagesController"));
routes.use("/about", require("../controller/buyer/AboutController"));
routes.use("/help", require("../controller/buyer/HelpController"));
routes.use("/faq", require("../controller/buyer/FaqController"));
routes.use("/myaccount", require("../controller/buyer/MyAccountController"));









// Seller
routes.use("/dashboard", require("../controller/seller/DashboardController"));

routes.use("/adminlogin", require("../controller/seller/AdminLoginController"));



module.exports = routes;