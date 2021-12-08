const express = require("express")
const pug = require("pug")
const routes = require("./routes/routes")
const app = express()

app.set("view engine","pug")


app.get("/", routes.index)

app.get("/randomcolor", (req, res)=>{
    res.sendFile(__dirname + "/randomcolor.js")
})

app.get("/script.js", (req,res)=>{
    res.sendFile(__dirname + "/script.js")
})


app.listen(3305)