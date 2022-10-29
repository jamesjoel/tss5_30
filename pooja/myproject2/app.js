const { urlencoded } = require("express");
const express=require("express")
const app = express()

 app.use(express.static(__dirname+"/asset"))

 app.set("view engine","ejs")

 app.use(express.json());

 app.use(urlencoded({extended: true}))

 app.use(require("./config/routes"))

const port=process.env.PORT ||3002
app.listen(port,()=>{
    console.log("server running")
})