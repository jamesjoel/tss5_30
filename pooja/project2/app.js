const express = require("express")
const app = express();

const MongoClient =require("mongodb").MongoClient;
const routes = require("./config/routes")


app.use(express.static(__dirname+"/asset"))

app.set("view engine","ejs")


app.use(express.json());

app.use(express.urlencoded({extended:true}));

app.use(routes);



// app.get("/", (req,res)=>{
//     res.render("pages/index")
// })
// app.get("/about",(req,res)=>{
//     res.render("pages/about")
// })
// app.get("/contact",(req,res)=>{
//     res.render("pages/contact")
// })
// app.get("/students",(req,res)=>{
//     res.render("pages/students")
// })
// app.post("/save",(req,res)=>{
//     req.body.age=parseInt(req.body.age);
//     MongoClient.connect("mongodb://localhost:27017",(err,con)=>{
//         var db = con.db("tss_pooja");
//         db.collection("students").insertOne(req.body);
//         res.redirect("/students")
        
//     });

// })
   

const port = process.env.PORT ||3015
app.listen(port,()=>{
    console.log("server running")
})