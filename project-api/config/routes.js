const routes = require("express").Router();

// localhost:3000/api/city
routes.use("/api/city", require("../controllers/CityController"));
routes.use("/api/category", require("../controllers/CategoryController"));
routes.use("/api/user", require("../controllers/UserController"));
routes.use("/api/userprofile", require("../controllers/UserProfileController"));
routes.use("/api/admin/login", require("../controllers/AdminLoginController"));
routes.use("/api/product", require("../controllers/ProductController"));
routes.use("/api/image", require("../controllers/ImageController"));



module.exports = routes;