const express = require("express");
const app = express();

app.use(express.static(__dirname+"/assets"));

// we have to set template/view engine in our application
app.set("view engine", "ejs");
// app.set("views", ["template1", "template2"]);


app.get("/", (req, res)=>{
    // res.sendFile(__dirname+"/index.html");
    var name = "Rohit Verma";
    var obj = { name : name, city : "indore" };
    res.render("index", obj);
});
app.get("/about", (req, res)=>{
    var arr = ["red", "green", "blue", "yellow"];
    var obj = { demo : arr };
    res.render("about", obj);
})

app.get("/about", (req, res)=>{

})



app.listen(3000, ()=>{
    console.log("server running");
})

// Routing method in express
/*
    .get()
    .post()
    .use()

*/