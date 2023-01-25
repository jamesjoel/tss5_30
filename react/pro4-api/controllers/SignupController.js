const routes = require("express").Router();
const User = require("../models/User")
const Image = require("../models/Image");
const  sha1 = require("sha1")
const path = require("path");
routes.post("/", (req, res)=>{
    delete req.body.re_pass;
    req.body.password = sha1(req.body.password);
    User.create(req.body, (err)=>{
        res.send({ success : true, status : 200});
    })
})



routes.post("/upload", (req, res)=>{
    // console.log(req.body);
    req.body.image = req.files.photo.name;
    req.files.photo.mv(path.resolve()+"/assets/photo/"+req.body.image, (err)=>{
        Image.create(req.body, (err)=>{
            res.send({success : true, imgInfo : {_id : "", __v : 0, name : req.body.name, image : "http://localhost:4200/photo/"+req.body.image} });
        })
    })
})
routes.get("/upload", (req, res)=>{
    // console.log(req.body);
    
        Image.find({}, (err, result)=>{
            let newresult = result.map((r)=>{
                r.image = "http://localhost:4200/photo/"+r.image;
                return r;
            });
            res.send(newresult);
        });
    
})


module.exports = routes;