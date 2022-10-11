const express = require("express")
const app = express()

app.use(express.static(__dirname+"/asset"))

app.set("view engine","ejs")

app.get("/", (req,res)=>{
    res.render("pages/index")
})
app.get("/about",(req,res)=>{
    res.render("pages/about")
})
app.get("/contact",(req,res)=>{
    res.render("pages/contact")
})

const port = process.env.PORT ||3015
app.listen(port,()=>{
    console.log("server running")
})