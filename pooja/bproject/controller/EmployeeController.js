const routes = require("express").Router();
const Employee = require("../models/Employee")

routes.get("/",(req,res)=>{
    res.render("pages/employee")
})

routes.get("/list",(req,res)=>{
    Employee.find({},(err,result)=>{
        // console.log(result);
    var pagedata = {
        result:result
    }
        res.render("pages/employee-list", pagedata)
    })
})

routes.post("/",(req,res)=>{
    Employee.create(req.body,(err)=>{
        res.redirect("/employee")

})  })

routes.get("/delete/:a",(req,res)=>{
    var id = req.params.a
    Employee.remove({_id:id},(err)=>{
res.redirect("/employee/list")
    })
})

routes.post("/update/:a",(req,res)=>{
    var id =req.params.a
Employee.updateMany({_id:id},req.body,(err)=>{
res.redirect("/employee/update");
})
})

module.exports = routes;