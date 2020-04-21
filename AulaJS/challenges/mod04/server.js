const express = require("express")
const nunjucks = require("nunjucks")
const routes = require("./routes")

const server = express()

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