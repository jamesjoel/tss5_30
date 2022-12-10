const routes = require("express").Router();
const Category = require("../models/Category");
routes.post("/", (req, res)=>{
    Category.create(req.body, (err)=>{
        res.send({ success : true });
    })
})
routes.get("/", (req, res)=>{ // all categroy
    console.log(req.headers);
    Category.find({}, (err, result)=>{
        res.send(result);
    })
})
routes.delete("/:id", (req, res)=>{
    var id = req.params.id;
    Category.deleteMany({ _id : id }, (err)=>{
        res.send({ success : true });
    })
})
routes.get("/:id", (req, res)=>{
    var id = req.params.id;
    Category.find({_id:id}, (err, result)=>{
        res.send(result[0]);
    })
})

routes.put("/:id", (req, res)=>{
    var id = req.params.id;
    Category.updateMany({_id : id }, req.body, (err)=>{
        res.send({ success : true });
    })
})
module.exports = routes;