const routes = require("express").Router();

routes.use("/signup", require('./SignUpController'));
routes.use("/signin", require('./SignInController'));
module.exports = routes;