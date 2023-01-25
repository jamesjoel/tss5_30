const express = require("express");
const app = express();
const cors = require("cors");
const routes = require("./config/routes");
const upload = require("express-fileupload");

app.use(express.json());
app.use(express.urlencoded({ extended : true}));
app.use(express.static(__dirname+"/assets"));
app.use(cors());
app.use(upload());
app.use(routes);


let port = process.env.PORT || 4200;

app.listen(port, ()=>{
    console.log("server running");
})


