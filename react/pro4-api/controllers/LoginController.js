const routes = require("express").Router();
const User = require("../models/User")
const sha1 = require("sha1");
routes.post("/", (req, res)=>{
    // console.log(req.body);
    let e = req.body.email;
    let p = req.body.password;
    User.find({ email : e }, (err, result)=>{
        if(result.length >= 1){
            if(result[0].password == sha1(p)){

            }else{
                res.send({ success : false, status : 401, errType : 2})

            }
        }else{
            res.send({ success : false, status : 401, errType : 1})
        }
    })
})

module.exports = routes;