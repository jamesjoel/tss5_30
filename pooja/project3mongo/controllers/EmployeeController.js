const routes = require("express").Router()
 const Employee = require("../models/Employee");

 routes.get("/" ,(req,res)=>{
    res.render("pages/employee")
 })
 routes.get("/list" , (req,res)=>{
   Employess.find({} , (err, result)=>{
      var pagedata ={result : result}
      res.render("pages/employee-list", pagedata)
   })
 })
// //  this is the form post method routing

routes.post("/", (req,res)=>{
console.log(req.body)
// Employee.create(req.body, (err)=>{
   // res.redirect("/employees/list")
   
})

 module.exports=routes;