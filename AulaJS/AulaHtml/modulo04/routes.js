const express = require('express')
const routes = express.Router()  // responsavel pelas rotas
const instructors = require('./instructors')

routes.get('/', function(req,res) {

    return res.redirect("/instructors")
})

routes.get('/instructors/create', function(req,res){
    return res.render("instructors/create")

})

routes.get('/instructors', function(req,res){
    return res.render("instructors/index")
})

routes.post("/instructors", instructors.post)

routes.get('/members', function(req,res){
    return res.send("members")
})

module.exports = routes // para exportar routes


