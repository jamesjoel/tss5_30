const express = require("express")
const app = express();

const MongoClient =require("mongodb").MongoClient;


app.use(express.static(__dirname+"/asset"))

app.set("view engine","ejs")

app.use(express());

app.use(express.urlencoded({extended:true}));


app.get("/", (req,res)=>{
    res.render("pages/index")
})
app.get("/about",(req,res)=>{
    res.render("pages/about")
})
app.get("/contact",(req,res)=>{
    res.render("pages/contact")
})
app.get("/students",(req,res)=>{
    res.render("pages/students")
})
app.post("/save",(req,res)=>{
    MongoClient.connect("mongodb://localhost:27017",(err,con)=>{
        var db = con.db("tss_new");
        db.collection("students").insertOne(req.body);
        res.redirect("students")
        parseInt()
        req.body.age=parseInt(req.body.age);
    })
})

const port = process.env.PORT ||3015
app.listen(port,()=>{
    console.log("server running")
})