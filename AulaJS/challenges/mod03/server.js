const express = require("express")
const nunjucks = require("nunjucks")

const server = express()

const course = require("./data")

server.use(express.static("public"))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express:server
})


server.get("/", function(req,  res){

    return res.render("courses", {items:course})
})

server.get("/about", function(req, res){
    const about = {
        logo : "https://rocketseat.com.br/static/images/logo-rocketseat.svg",
        name: "Rocketseat",
        subtitle: "As melhores tecnologias em programação, direto ao ponto e do jeito certo",
        info:"No meio de tanta informação e da quantidade de ferramentas que surgem todos os dias, você precisa de alguém que te leve na direção certa.",
        tecnology: [
            {name: "JavaScript"},
            {name: "HTML"},
            {name: "CSS"},
            {name: "NodeJS"},
            {name: "ReactJS"},
            {name: "React Native"}
        ],
        links: [
            {name: "Github", url: "https://github.com/rocketseat"},
            {name: "Twitter", url: "https://www.instagram.com/rocketseat_oficial/"},
            {name: "Linkedin", url: "https://www.facebook.com/rocketseat"},
        ]     
    }
    return res.render("about", {about:about})
})


server.use(function(req, res) {
         res.status(404).render("not-found");
       
})

server.listen(5000, function(){
    console.log("server is running")
})