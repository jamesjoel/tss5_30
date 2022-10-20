const express = require("express");
const app = express();

app.use(express.static(__dirname+"/assets"));
app.set("view engine", "ejs");

app.get("/", (req, res)=>{
    res.render("pages/index");
})
app.get("/about", (req, res)=>{
    res.render("pages/about");
})
app.get("/contact", (req, res)=>{

    var arr = ["indore", "pune", "delhi", "patna", "bhopal"];
    var info = [
        {
            name : "amar",
            age : 23,
            city : "indore"
        },
        {
            name : "diksha",
            age : 21,
            city : "bhopal"
        },
        {
            name : "gaurav",
            age : 22,
            city : "mumbai"
        },
        {
            name : "jaya",
            age : 27,
            city : "pune"
        }
    ];

    var pagedata = { city : arr, info : info };

    res.render("pages/contact", pagedata);
})

const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log("server running");
})