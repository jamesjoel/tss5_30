const routes = require("express").Router();
const Product = require("../models/Product");
routes.post("/", (req, res)=>{
    Product.create(req.body, (err)=>{
        res.send({ success : true });
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