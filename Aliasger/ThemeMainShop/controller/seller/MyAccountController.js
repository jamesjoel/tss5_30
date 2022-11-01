const routes = require("express").Router();

routes.use("/admin-signup", require('./AdminSignUpController'));
routes.use("/admin-signin", require('./AdminSignInController'));
module.exports = routes;