const Employee = require("../models/Employee");

const routes = require("express").Router();

routes.get("/",(req,res)=>{
    res.render("pages/employee");
})

routes.get("/",(req,res)=>{
    Employee.find({},(err,result)=>{
        console.log("result")
        res.render("pages/employee")
    })
})


routes.post("/",(req,res)=>{
    // console.log(req.body)
     Employee.create(req.body,(err)=>{
        console.log(result)
     res.redirect("/employee")
    })
})


module.exports = routes