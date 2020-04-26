const express = require("express")
const nunjucks = require("nunjucks")
const routes = require("./routes")
const methodOverride= require('method-override')

const server = express()

server.use(express.urlencoded({extended:true})) //para funionar o req.body
server.use(methodOverride('_method')) // tem que ser antes de routes
server.use(routes)
server.use(express.static("public"))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express:server,
    autoescape: false, //para que a html dentro de uma variável funcione
    noCache: true
})








server.listen(5000, function(){
    console.log("server is running")
})