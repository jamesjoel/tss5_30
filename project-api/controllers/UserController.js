const routes = require("express").Router();
const User = require("../models/User");
const sha1 = require("sha1");
const jwt = require("jsonwebtoken");

routes.post("/", (req, res)=>{
    delete req.body.re_password;

    req.body.password = sha1(req.body.password);

    User.create(req.body, (err)=>{
        res.send({ success : true });
    })

    // console.log(req.body);
})

routes.post("/loginauth", (req, res)=>{
    // console.log(req.body);
    var e = req.body.email;
    var p = sha1(req.body.password);
    User.find({ email : e }, (err, result)=>{
        if(result.length == 1) // email id is correct
        {
            if(result[0].password == p)
            {
                let obj = { id : result[0]._id, email : result[0].email };
                let token = jwt.sign(obj, "the stepping stone");
                res.send({ success : true, token : token });
            }else{
                res.send({ success : false, errType : 2 });

            }
        }else{
            res.send({ success : false, errType : 1 });
        }
    })
})



module.exports = routes;


/*

1.  Student.find({}, (err, result)=>{

    })
2.  User.find({ email : e }, (err, result)=>{

    })



*/