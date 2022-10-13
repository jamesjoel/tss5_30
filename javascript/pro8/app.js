const express = require("express");
const app = express();





const HomeCtrl = require("./controllers/HomeController");
const AboutCtrl = require("./controllers/AboutController");
const ContactCtrl = require("./controllers/ContactController");
const HelpCtrl = require("./controllers/HelpController");


app.use("/", HomeCtrl);
app.use("/about", AboutCtrl);
app.use("/contact", ContactCtrl);
app.use("/help", HelpCtrl);


app.listen(3000, ()=>{
    console.log("server running");
})