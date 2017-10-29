const express = require("express");
const app = express();

app.get("/", function (req,res) {
res.send(" Hello Express ")
})

app.get("/user", function (req,res) {
    res.send("<h2> H2 Hello Express </h2>")
    })

app.get("/user/:user_id", function (req,res) {
    res.send(`<h1>${req.params.user_id}</h1>`)
    })

app.listen(3000, function(){
    console.log("server is running")
})