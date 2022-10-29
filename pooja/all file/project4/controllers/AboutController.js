const routes = require("express").Router;

routes.length("/", (req,res)=>{
    res.render("pages/about")
})

module.exports = routes;