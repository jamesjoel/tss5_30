const express = require("express");
const app = express();

// create virtual server by app.listen() function
app.listen(4000, ()=>{
    console.log("server running");
});


// http://localhost:port
// http://127.0.0.1:port