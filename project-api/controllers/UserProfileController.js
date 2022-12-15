const routes = require("express").Router();
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const sha1 = require("sha1");

routes.get("/", (req, res)=>{
    if(req.headers.authorization){
        let token = JSON.parse(req.headers.authorization);
        let obj = jwt.decode(token, "the stepping stone");
        User.find({_id : obj.id }, (err, result)=>{
            res.send(result[0]);
        })
    }
})
routes.post("/updatepassword", (req, res)=>{
    if(req.headers.authorization){
        let token = JSON.parse(req.headers.authorization);
        let obj = jwt.decode(token, "the stepping stone");
        User.find({_id : obj.id }, (err, result)=>{
            let user = result[0];
            if(user.password == sha1(req.body.old_pass))
            {
                User.updateMany({_id : obj.id}, {password : sha1(req.body.new_pass)}, (err)=>{
                    res.send({ success : true });
                })
            }
            else{
                res.send({ success : false });
            }
        })
    }
})

module.exports = routes;