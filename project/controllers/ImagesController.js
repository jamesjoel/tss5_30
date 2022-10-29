const routes = require("express").Router();
const path = require("path");
const uni = require("unique-slug");
const Images = require("../models/Images");

routes.get("/", (req, res)=>{
    res.render("pages/images")
})

routes.post("/upload", (req, res)=>{
    
    var str = uni();
    
    var img = req.files.image;
    var name = img.name; // hello.1.jpg ---------------- 784cda1.jpg
    var arr = name.split("."); // ["hello", 1, "jpg"]
    var ext = arr[arr.length-1];

    var newname = str+"."+ext;
    var imgpath = path.resolve()+"/assets/photos/"+newname; 
    

    // console.log(path.resolve()+"/assets/photos/"+name);
    req.body.image = newname;

    img.mv(imgpath, (err)=>{
        Images.create(req.body, (err)=>{

            res.redirect("/images");
        })
    });
})


routes.get("/list", (req, res)=>{
    Images.find({}, (err, result)=>{
        var pagedata = { result : result };
        res.render("pages/image-list", pagedata);
    })
})



module.exports = routes;


/*
    __dirname ------------ the __dirname reture folder path which we have right now
    path.resove() ---------- this reture only root folder path


*/