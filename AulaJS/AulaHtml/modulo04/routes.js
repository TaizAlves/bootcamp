const express = require('express')
const routes = express.Router()  // responsavel pelas rotas

routes.get('/', function(req,res) {

    return res.redirect("/instructors")
})

routes.get('/instructors/create', function(req,res){
    return res.render("instructors/create")

})

routes.get('/instructors', function(req,res){
    return res.render("instructors/index")
})

routes.post("/instructors", function(req,res){
   
    const keys = Object.keys(req.body) // cria uma lista das chaves 
    // req.body = retorna uma lista do que foi preenchido junto com a chave
    for (key of keys){
         if (req.body[key] == "")
            return res.send("Please, fill all fields!")
    }

    return res.send(req.body)
})

routes.get('/members', function(req,res){
    return res.send("members")
})

module.exports = routes // para exportar routes


