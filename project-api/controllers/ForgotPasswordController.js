const routes = require("express").Router();
const User = require("../models/User");
const rn = require("random-number");

routes.post("/", (req, res)=>{
    let u = req.body.username;
    User.find({ email : u }, (err, result)=>{
        if(result.length==0){
            res.send({ success : false });
        }else{
            let numFun = rn.generator({
                min : 1000,
                max : 9999,
                integer : true
            });
            let num = numFun();
            
            User.updateMany({ email : u }, { otp : num }, (err)=>{
                // console.log(err);
                res.send({ success : true });
            })
        }
    })
})

routes.post("/checkotp", (req, res)=>{
    // console.log(req.body);
    let u = req.body.username;
    let o = req.body.otp;
    User.find({ $and : [{ email : u}, {otp : o}] }, (err, result)=>{
        if(result.length == 0){
            console.log("NO");
        }else{
            
            console.log("YES");
        }
    })
})

module.exports = routes;