const routes = require("express").Router();
const Admin = require("../models/Admin");
const sha1 = require("sha1");

routes.post("/", (req, res)=>{
    var u = req.body.username;
    var p = req.body.password;

    Admin.find({ username : u }, (err, result)=>{
        if(result.length == 1)
        {
            if(result[0].password == sha1(p))
            {

            }else{

                res.send({ success : false, errType : 2});
            }
        }else{
            res.send({ success : false, errType : 1});
        }
    })
})


module.exports = routes;