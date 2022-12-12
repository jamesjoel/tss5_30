const routes = require("express").Router();
const jwt = require("jsonwebtoken");
const User = require("../models/User");

routes.get("/", (req, res)=>{
    if(req.headers.authorization){
        let token = JSON.parse(req.headers.authorization);
        let obj = jwt.decode(token, "the stepping stone");
        User.find({_id : obj.id }, (err, result)=>{
            res.send(result[0]);
        })
    }
})

module.exports = routes;