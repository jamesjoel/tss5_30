
const routes = require("express").Router();
const Student = require("../models/Student");

routes.get("/", (req,res)=> {
res.render("pages/student");
})
routes.post("/save", (req,res)=> {
req.body.age = parseInt(req.body.age);
req.body.fee = parseInt(req.body.fee);

Student.create(req.body, (error)=> {
    res.redirect("/student");
})
});

routes.get("/list", (req,res)=> {

    Student.find({}, (error,result)=>{
       var pagedata = {
        result : result
       };
       res.render("pages/student-list", pagedata);
    })

    
    })
module.exports = routes;