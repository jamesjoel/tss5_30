const express = require("express");
const app =express();

app.use(express.static(__dirname+"/asset"));

app.set("view engine","ejs");

app.get("/" ,(req,res)=>{
    var arr = ["indore","Mumbai", "Pune"];
    var pagedata = {name : arr, x :false }
    res.render("index", pagedata)
});

app.get("/about",(req,res)=>{
    var data =["red","green","orange","pink","magenta","slateblue"];
    var pagedata ={
        color:data
    }
    res.render("about",pagedata)
})



const port =process.env.PORT || 3013
app.listen(port, ()=>{
    console.log("server running")
})