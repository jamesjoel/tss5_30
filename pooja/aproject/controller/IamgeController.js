const routes = require("express").Router();

routes.get("/",(req,res)=>{
    res.render("pages/image");
})

module.exports = routes