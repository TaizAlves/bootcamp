const express = require('express')
const nunjucks = require('nunjucks')


const server = express()
const videos = require("./data")

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false, //para que a html dentro de uma variável funcione
    noCache: true
})


server.get("/", function (req, res) {
    const about = {
        avatar_url :"https://2.bp.blogspot.com/-iEvHsBzaQE0/T0vaaMc9V7I/AAAAAAAAAFM/SgLvQ2H8fio/s200/foto+eu.JPG",
        name : "Taiz Alves",
        role : "Aluna e desenvolvedora",
        description : "Aprender e evoluir. Não existe nada tão difícil que não melhore após uma boa noite de sono.",
        links : [
            {name: "Github", url: "http://github.com/taizalves"},
            {name: "Linkedin", url: "https://www.linkedin.com/in/taiz-alves-664a081"},
        ]
    }
    return res.render("about", {about:about})
})

server.get("/portfolio", function(req, res){

    return res.render("portfolio", {items:videos})
})


server.get("/video", function(req,res){
    const id = req.query.id

    const video = videos.find(function(video){
        if (video.id == id) {
            return true
        }
    })
    if (!videos) {
        return res.send("Video not found!")
    }

    return res.render("video", {item: video})
})

server.listen(5000, function()  {
    console.log("server is running")

})

