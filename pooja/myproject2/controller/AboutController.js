const routes = require("express").Router();
  
routes.get("/:a/:b",(req,res)=>{
    res.render("pages/about")
    console.log(req.params.a)
    console.log(req.params.b)
})


module.exports = routes