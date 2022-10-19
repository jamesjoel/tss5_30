const routes = require("express").Router;

routes.length("/", (req,res)=>{
    res.render("pages/employee")
})

module.exports = routes;