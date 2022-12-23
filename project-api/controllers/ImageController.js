const routes = require("express").Router();
const Image = require("../models/Image");
const rand = require("random-string");
const path = require("path");

routes.post("/", (req, res)=>{
    let file = req.files.image;
    let str = rand({ length : 20});
    let arr = file.name.split(".");
    let ext = arr[arr.length-1];

    let newname = str+"."+ext;
    file.mv(path.resolve()+"/assets/slider/"+newname, (err)=>{
        Image.create({ name : newname }, (err)=>{
            let obj = { name : "http://localhost:3000/slider/"+newname };
            res.send(obj);
        })
    })

})

routes.get("/", (req, res)=>{
    Image.find({}, (err, result)=>{
        let newresult = result.map((x)=>{
               x.name = "http://localhost:3000/slider/"+x.name; 
               return x;
        })
        res.send(newresult);
    })
})

module.exports = routes;

/*
    res.render()
    res.sendFile()
    res.send()
    res.redirect()

*/