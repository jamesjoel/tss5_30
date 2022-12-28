const routes = require("express").Router();
const City = require("../models/City");

routes.get("/", (req, res)=>{
    City.find({}, (err, result)=>{
        res.send(result);
    })
});
routes.get("/citybystate/:a", (req, res)=>{
    let x = req.params.a;
    City.find({ state : x }, (err, result)=>{
        res.send(result);
    })
});
routes.get("/state", (req, res)=>{
    City.find({}).distinct("state").exec((err, result)=>{
        res.send(result);
    })
})



routes.get("/totalcity", (req, res)=>{
    City.count((err, result)=>{
        res.send({ total : result });
    })
})
routes.get("/pagination/:a/:b", (req, res)=>{
    var total = req.params.a; // 200
    var skip = req.params.b; // 3
    if(skip !=0 ){

        skip = (skip-1)*total;
    }

    City.find().skip(skip).limit(total).exec((err, result)=>{
        res.send(result);
    })
})


module.exports = routes;

/*
    res.render()
    res.sendFile()
    res.send()
    res.redirect()

*/