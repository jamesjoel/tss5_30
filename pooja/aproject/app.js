const express = require("express");
const app = express();
const routes = require("./config/routes")
const upload = require("express-fileupload");

app.use(express.static(__dirname+"/assets"));

app.set("view engine","ejs");

app.use(express.json());

app.use(express.urlencoded({extended : true}));

app.use(routes);

app.use(upload());

const port = process.env.PORT ||3001
app.listen(port,()=>{
    console.log("server running ")
})