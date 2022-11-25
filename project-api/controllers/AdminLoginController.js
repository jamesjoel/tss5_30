const routes = require("express").Router();
const Admin = require("../models/Admin");
const sha1 = require("sha1");
const jwt = require("jsonwebtoken");
routes.post("/", (req, res)=>{
    var u = req.body.username;
    var p = req.body.password;

    Admin.find({ username : u }, (err, result)=>{
        if(result.length == 1)
        {
            if(result[0].password == sha1(p))
            {
                var obj = { name : result[0].name, id : result[0]._id };
                var token = jwt.sign(obj, "the stepping stone");
                res.send({ success : true, token : token});
            }else{

                res.send({ success : false, errType : 2});
            }
        }else{
            res.send({ success : false, errType : 1});
        }
    })
})


module.exports = routes;