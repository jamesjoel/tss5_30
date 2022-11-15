const routes = require("express").Router();

// localhost:3000/api/city
routes.use("/api/city", require("../controllers/CityController"));


module.exports = routes;