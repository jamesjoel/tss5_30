const express =require("express");
const app = express();

app.use(express.static(__dirname+"/asset"))
app.set("view engine" ,"ejs")

app.use(require("./config/routes"));


const port = process.env.PORT || 3000
app.listen(port, ()=>{
    console.log("server running")
})