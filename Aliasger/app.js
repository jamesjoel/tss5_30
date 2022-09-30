const show = console.log;
const express = require("express");
const app = express();

app.set("view engine", "ejs");


app.use(express.static(__dirname + "/assets"));

const port = 9000;

app.listen(port , ()=> {
    show("Server Running");
})

app.get("/", (request, response)=>{
    response.render("index.ejs");
})
app.get("/about", (request, response)=>{
    response.render("about.ejs");
})
app.get("/contact", (request, response)=>{
    response.render("contact.ejs");
})
app.get("/quote", (request, response)=>{
    response.render("get-a-quote.ejs");
})
app.get("/services", (request, response)=>{
    response.render("services.ejs", user);
})
app.get("/service-details", (request, response)=>{
        response.render("service-details.ejs");
    })
app.get("/pricing", (request, response)=>{
    response.render("pricing.ejs");
})
app.get("/sample-inner-page", (request, response)=>{
    response.render("sample-inner-page.ejs");
})
