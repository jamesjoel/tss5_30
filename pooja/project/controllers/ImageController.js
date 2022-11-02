const routes = require("express").Router();
const path = require("path");
const uni = require("unique-slug");
const Images = require("../models/images")

routes.get("/", (req, res)=>{
    res.render("pages/images");
})
routes.get("/list",(req,res)=>{
    Images.find({},(err,result)=>{
        var pagedata = { result : result}
        res.render("pages/images-list",pagedata)
    })
    
})

routes.post("/upload",(req,res)=>{
    var str = uni();
    var img = req.files.image;
    var name = img.name;
    var arr = name.split(".");
    var ext = arr[arr.length-1]
    var newname = str+"."+ext; 
    var imgpath = path.resolve()+"/assets/photo/"+newname;
    req.body.image = newname;

   img.mv(imgpath,(err)=>{
    Images.create(req.body,(err)=>{
        res.redirect("/images");
    })
       
    });
})

module.exports = routes;