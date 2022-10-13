const express = require("express");
const app = express();

const HomeCtrl = require("./controllers/HomeController");
const ContactCtrl = require("./controllers/ContactController");
const AboutCtrl = require("./controllers/AboutController");
const HelpCtrl = require("./controllers/HelpController");

app.listen(3000, ()=>{
    console.log("server running")
})
