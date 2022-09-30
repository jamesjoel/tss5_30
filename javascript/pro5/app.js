const express = require("express");
const app = express();

app.use(express.static(__dirname+"/assets"));
app.set("view engine", "ejs");



app.get("/", (req, res)=>{
    var name = "James";
    var city = "indore";
    var obj = { a : name, b : city, c : 25 };
    res.render("index", obj);
})

app.get("/about", (req, res)=>{
    res.render("about");
})
app.get("/contact", (req, res)=>{
    res.render("contact");
})

const port = 3000;
app.listen(port, ()=>{
    console.log("server running");
})