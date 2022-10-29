const routes = require("express").Router();
 const Employee= require("../models/employee")
 const City = require("../models/City")
  
routes.get("/",(req,res)=>{
    City.find({},(err,result)=>{
        var pagedata = {
            city:result
        }
        res.render("pages/employee",pagedata)
    })
    
})

routes.get("/list",(req,res)=>{
    // Employee.find({},(err,result)=>{
    //     // console.log(result)
    //     var pagedata = {
    //         result: result
    //     }
        res.render("pages/employee-list")
    }) 
    
routes.get("/detail/:a",(req,res)=>{
    var id = req.params.a
    Employee.find({_id:id},(err,result)=>{
        var pagedata ={result:result[0]}
        res.render("pages/employee-detail",pagedata)
    })
})
routes.get("/delete/:a",(req,res)=>{
    var id = req.params.a
    Employee.remove({_id : id},(err)=>{
        res.redirect("/employee/list")
    })
})



routes.post("/",(req,res)=>{
    // console.log(req.body)
    Employee.create(req.body, (err)=>{
        res.redirect("/employee")
    })
})


module.exports = routes;