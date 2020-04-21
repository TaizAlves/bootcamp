const express= require("express")
const nunjucks = require("nunjucks")

const server = express()

const receitas = require("./data")

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express:server,
    autoescape: false,
    noCache: true
})


server.get("/", function(req,res){
    let lastrceitas = []
    for (let receita of receitas) {
        if (lastrceitas.length < 4){
            lastrceitas.push(receita)
        }
    }
        
    return res.render("index", {receitas:lastrceitas})
})


server.get("/receitas", function(req,res){
    return res.render("receitas", {items:receitas})
})

server.get("/sobre", function(req,res){
    return res.render("sobre")
})



server.get("/receitas/:index", function(req,res){
    const recipeIndex = req.params.index
    //console.log(receitas[recipeIndex])
    return res.render("detalhe", {item:receitas[recipeIndex]})

})



server.listen(5000, function(){
    console.log("server is running")
})







