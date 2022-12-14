const express = require("express");
const app = express();
const routes = require("./config/routes");
const cors = require("cors");
const upload = require("express-fileupload");

app.use(express.json());
app.use(express.urlencoded({ extended : true }));

app.use(express.static(__dirname+"/assets"));
// localhost:3000/pro_img/1.jpg

app.use(upload());
app.use(cors());
app.use(routes);

const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log("server running");
})
