const routes = require("express").Router();
const Product = require("../models/Product");
const str = require("random-string");
const path = require("path");

routes.post("/", (req, res)=>{
    // console.log(JSON.parse(req.body.data));
    // console.log(req.files.image);
    var body = JSON.parse(req.body.data);
    var image = req.files.image;

    var rand_str = str({ length : 50 });
    var org_name = image.name; // 1.jpg
    var arr = org_name.split(".");
    var ext = arr[arr.length-1];
    var new_name = rand_str+"."+ext;

    body.image = new_name;

    image.mv(path.resolve()+"/assets/pro_img/"+new_name, (err)=>{

        Product.create(body, (err)=>{
            res.send({ success : true });
        })
    })

    

})
routes.get("/", (req, res)=>{ // all categroy
    Product.find({}, (err, result)=>{
        res.send(result);
    })
})
routes.delete("/:id", (req, res)=>{
    var id = req.params.id;
    Product.deleteMany({ _id : id }, (err)=>{
        res.send({ success : true });
    })
})
routes.get("/:id", (req, res)=>{
    var id = req.params.id;
    Product.find({_id:id}, (err, result)=>{
        res.send(result[0]);
    })
})

routes.put("/:id", (req, res)=>{
    var id = req.params.id;
    Product.updateMany({_id : id }, req.body, (err)=>{
        res.send({ success : true });
    })
})
module.exports = routes;