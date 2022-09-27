const express = require("express");
const app = express();




app.get("/about", (req, res)=>{
    res.sendFile(__dirname+"/about.html");
     // F:/tss5_30/javascript/pro3
});

app.get("/contact", (req, res)=>{
    res.sendFile(__dirname+"/contact.html");
})

app.get("/", (req, res)=>{
    
    res.sendFile(__dirname+"/index.html");
})
app.get("/help", (req, res)=>{
    
    res.sendFile(__dirname+"/abc.html");
})

const port = 3000;
app.listen(port, ()=>{
    console.log("Server running");
})