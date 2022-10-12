const express = require("express");
const app = express();
const MongoClient = require("mongodb").MongoClient;

app.use(express.static(__dirname+"/assets"));
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended : true }));


app.get("/", (req, res)=>{
   res.render("pages/index");
})

app.get("/about", (req, res)=>{
  res.render("pages/about");
})

app.get("/contact", (req, res)=>{
    res.render("pages/contact");
})

app.get("/student", (req, res)=>{
  res.render("pages/student");
})

app.post("/save", (req, res)=>{

  // parseInt()
  req.body.age = parseInt(req.body.age);

  MongoClient.connect("mongodb://localhost:27017", (err, con)=>{
    var db = con.db("tss_new");
    db.collection("students").insertOne(req.body);
    res.redirect("/students");
  });

})


const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log("server running");
})