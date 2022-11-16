const routes = require("express").Router();

// localhost:3000/api/city
routes.use("/api/city", require("../controllers/CityController"));
routes.use("/api/category", require("../controllers/CategoryController"));


module.exports = routes;