var express = require("express");
var app = express();

// the app.listen() function is used for create virtual server
app.listen(3001, ()=>{
    console.log("server running");
});

// console.log("hello");