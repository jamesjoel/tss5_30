const routes = require("express").Router();
const MongoClient = require("mongodb").MongoClient;

routes.get("/" ,(req,res)=>{
    res.render("pages/students")
})
routes.post("/save",(req,res)=>{
   req.body.fee = parseInt(req.body.fee)
   req.body.age = parseInt(req.body.age)

   MongoClient.connect("mongodb://localhost27017",(err,con)=>{
    const db = con.db("tss_pooja");
    db.collection("student").insertOne(req.body,(err)=>{
        res.redirect("/");
    }); 
   })
// console.log(req.body)
});

module.exports = routes;