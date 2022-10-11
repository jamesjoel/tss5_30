const express = require("express");
// calling the express constructor
const app = express();

app.use(express.static(__dirname+"/assets"));
app.set('view engine', 'ejs');

app.get("/", (req, res)=>{
    var user = [
        {
            id : 1,
            name : "amar",
            fee : 5000
        },
        {
            id : 2,
            name : "mohit",
            fee : 4000
        },
        {
            id : 3,
            name : "nidhi",
            fee : 5500
        }
    ];
    var pagedata = { user : user };
    res.render("pages/index", pagedata);
})

const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log("server running");
})