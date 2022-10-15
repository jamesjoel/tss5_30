const express = require("express");

const routes = require("./config/routes");

const app = express();

app.use(express.static(__dirname + "/assets"));
app.use(express.json());

app.use(express.urlencoded({extended : true}));

app.use(routes);

app.set("view engine", "ejs");

const port = process.env.PORT || 3000;

app.listen(port, ()=> {
    console.log("Server Running");
})