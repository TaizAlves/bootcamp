const express = require('express')
const nunjucks = require('nunjucks')
const routes = require("./routes") //usar o routes
const methodoverride = require('method-override')


const server = express()

server.use(express.urlencoded({extended:true}))  // faz funcionar o req.body lá do post em routes

server.use(express.static('public'))
server.use(methodoverride('_method'))
server.use(routes)


server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false, //para que a html dentro de uma variável funcione
    noCache: true
})



server.listen(5000, function()  {
    console.log("server is running")

})


