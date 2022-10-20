const routes = require("express").Router()
 const Employee = require("../models/Employee");

 routes.get("/" ,(req,res)=>{
    res.render("pages/employee")
 })
 routes.get("/list" , (req,res)=>{
   Employee.find({}, (err,result)=>{
      // console.log(result)
      // inserting result in variable
      var pagedata = {
         result:result
      }
      res.render("pages/employee-list",pagedata)
   })
   })

// //  this is the form post method routing

routes.post("/", (req,res)=>{
console.log(req.body)
 Employee.create(req.body, (err)=>{
   res.redirect("/employee/list")
   
})
})

 module.exports=routes;