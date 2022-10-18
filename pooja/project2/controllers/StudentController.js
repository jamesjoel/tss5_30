const routes = require("express").Router();
const Student = require("../modals/Student");

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

module.exports = routes;
Footer
© 2022 