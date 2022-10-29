const routes = require("express").Router();
const Student = require("../models/Student");
const City = require("../models/City")

routes.get("/", (req, res)=>{
   City.find({},(err,result)=>{
    var pagedata = {
        city:result
    }
    res.render("pages/student" , pagedata)
   })
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
    console.log(req.params.a)
    var id = req.params.a
    Student.find({_id: id},(err,result)=>{
    var pagedata = { 
        result : result[0]
    };
        res.render("pages/student-detail", pagedata);
    })        })

 routes.get("/delete/:a",(req,res)=>{
        // console.log(req.params.a)
      var id = req.params.a;
        Student.remove({ _id: id},(err)=>{
         res.redirect("/student/list")
        })
     })

// routes.get("/edit/:a", (req, res)=>{
//     var id = req.params.a;
//     Student.find({_id : id}, (err, result1)=>{
//         City.find({}, (err, result2)=>{
//             var pagedata = { city : result2, student : result1[0] };
//             res.render('pages/student-edit', pagedata);
//         })
//     })


// })

// routes.post("/update/:a", (req, res)=>{
//     console.log(req.body);
//     return;
//     var id = req.params.a;
//     Student.updateMany({ _id : id }, req.body, (err)=>{
//         res.redirect("/student/list");
//     })
// })

module.exports = routes;