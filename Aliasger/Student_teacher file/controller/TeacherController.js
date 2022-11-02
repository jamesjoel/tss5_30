const routes = require("express").Router();
const Teacher = require("../models/Teacher");

routes.get("/", (req,res)=> {
res.render("pages/teacher");
})

routes.post("/set", (req,res)=> {
    req.body.age = parseInt(req.body.age);
    req.body.fee = parseInt(req.body.fee);
    
    Teacher.create(req.body, (error)=> {
        res.redirect("/teacher");
    })
    });
    
    routes.get("/Tlist", (req,res)=> {
    
        Teacher.find({}, (error,result)=>{
           var pagedata = {
            result : result
           };
           res.render("pages/teacher-list", pagedata);
        })
    
        
        })
    module.exports = routes;
module.exports = routes;