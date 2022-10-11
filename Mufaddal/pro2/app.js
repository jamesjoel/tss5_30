const express = require("express");
const app = express();

app.use(express.static(__dirname+"/assets"));

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
    console.log("index page");
})

app.get("/about",(req,res)=>{
    res.sendFile(__dirname+"/about.html");
    console.log("about page");
})

app.get("/contact",(req,res)=>{
    res.sendFile(__dirname+"/contact.html");
    console.log("contact");
})

app.get("/travelling",(req,res)=>{
    res.sendFile(__dirname+"/travelling.html")
    console.log("Travelling page");
})
const port = 4005;
app.listen(port,()=>{
    console.log("Server running")
})