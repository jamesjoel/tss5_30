const express = require("express");
const app = express()
const mongoose = require("mongoose");
const User = require("./User");
const cors = require("cors")
mongoose.connect("mongodb+srv://james:n9whWH5YmDguanhq@cluster0.a9ienr2.mongodb.net/tss5")


app.use(express.json());
app.use(express.urlencoded({ extended : true }));
app.use(cors())
mongoose.connection.on("connected", ()=>{
    console.log("connected")
})
mongoose.connection.on("error", (err)=>{
    console.log(err);
})


app.post("/api/save", (req, res)=>{
    // console.log(req.body);
    User.create(req.body, (err)=>{
        res.send({success : true});
    })
})
app.get("/api/get", async (req, res)=>{
    // console.log(req.body);
    // User.find({}, (err, result)=>{
    //     res.send(result);
    // })

    let result = await User.find({});
    res.send(result);
})

app.delete("/api/delete/:id", async (req, res)=>{
    let id = req.params.id;
    await User.deleteMany({_id:id});
    res.send({succeses: true});
})


app.put("/api/update/:id", async (req, res)=>{
    let id = req.params.id;
    await User.updateMany({_id:id}, req.body);
    res.send({succeses: true});
})
app.get("/api/get/:id", async (req, res)=>{
    let id = req.params.id;
    let result = await User.find({_id :id });
    res.send(result);
})






app.listen(4200, ()=>{
    console.log("server running");
})

//n9whWH5YmDguanhq