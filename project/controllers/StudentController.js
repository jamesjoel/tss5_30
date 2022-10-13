const routes = require("express").Router();
const MongoClient = require("mongodb").MongoClient;

routes.get("/", (req, res)=>{
    res.render("pages/student");
})

routes.post("/save", (req, res)=>{
    // console.log(req.body);

    req.body.full_name = req.body.fullname;
    delete req.body.fullname;

    req.body.fee = parseInt(req.body.fee);
    req.body.age = parseInt(req.body.age);
    MongoClient.connect("mongodb://localhost:27017", (err, con)=>{
        const db = con.db("tss_new");
        db.collection("student").insertOne(req.body, (err)=>{
            res.redirect("/");
        });
    });
});

module.exports = routes;