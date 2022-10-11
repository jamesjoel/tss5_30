const express = require("express");
const app = express();

app.use(express.static(__dirname+"/assets"));
app.set("view engine", "ejs");

app.get("/", (req, res)=>{
    var arr = ["indore", "pune", "mumbai"];
    var pagedata = { name : arr, x : false };
    res.render("index", pagedata);
})

app.get("/about", (req, res)=>{
    var data = ["red", "green", "blue", "yellow", "pink", "black", "white"];
    var pagedata = { color : data };
    res.render("about", pagedata);
})

app.get("/student", (req, res)=>{

    var json = [
        {
            name : "rohit",
            age : 25,
            city : "indore",
            fee : 5000
        },
        {
            name : "jaya",
            age : 21,
            city : "mumbai",
            fee : 5600
        },
        {
            name : "amar",
            age : 30,
            city : "pune",
            fee : 7000
        },
        {
            name : "gaurav",
            age : 23,
            city : "indore",
            fee : 10000
        },
        {
            name : "vijay",
            age : 22,
            city : "indore",
            fee : 5000
        },
        {
            name : "nidhi",
            age : 19,
            city : "mumbai",
            fee : 7500
        }
    ]

    var pagedata = { student : json };
    res.render("student", pagedata);
})



const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log("server running");
})