const routes = require("express").Router();

routes.get("/:a/:b", (req, res)=>{
    console.log(req.params.a)
    console.log(req.params.b)
    
    res.render("pages/contact");
})

module.exports = routes;