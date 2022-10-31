const routes = require("express").Router();
const Teacher = require("../models/Teacher");
routes.get("/", (req, res)=>{
    Teacher.find({}, (err, result)=>{
        var pagedata = { result : result };
        res.render("pages/teacher", pagedata);
    })
})
routes.get("/delete/:a", (req, res)=>{
    var id = req.params.a;
    Teacher.remove({ _id : id }, (err)=>{
        res.redirect("/teacher");
    })
})
routes.get("/edit/:a", (req, res)=>{
    var id = req.params.a;
    Teacher.find({ _id : id }, (err, result)=>{
        var pagedata = { result : result[0]};
        res.render("pages/edit-teacher", pagedata);

    })
})

routes.post("/", (req, res)=>{
    Teacher.create(req.body, (err)=>{
        res.redirect("/teacher");
    })    
})
routes.post("/update/:a", (req, res)=>{
    var id = req.params.a;
    Teacher.updateMany({ _id : id }, req.body, (err)=>{
        res.redirect("/teacher");
    })
})

module.exports = routes;