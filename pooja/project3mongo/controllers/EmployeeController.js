const routes = require("express").Router()
 routes.get("/" ,(req,res)=>{
    res.render("pages/employee")
 })

 module.exports=routes;