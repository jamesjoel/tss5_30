const routes = require("express").Router();
const Student = require("../models/Student");

routes.get("/", (req, res)=>{
    res.render("pages/student");
})

routes.post("/save", (req, res)=>{
    req.body.fee = parseInt(req.body.fee);
    req.body.age = parseInt(req.body.age);
    Student.create(req.body, (err)=>{
        res.redirect("/student/list");
    })
});

routes.get("/list", (req, res)=>{
    Student.find({}, (err, result)=>{
        var pagedata = { result : result };
        res.render("pages/student-list", pagedata);
    });
})
routes.get("/detail/:a", (req, res)=>{
    // console.log(req.params.a);
    var id = req.params.a;
    Student.find({ _id : id }, (err, result)=>{
        var pagedata = { result : result[0] };
        // console.log(result);
        res.render("pages/student-detail", pagedata);
    })
})

module.exports = routes;