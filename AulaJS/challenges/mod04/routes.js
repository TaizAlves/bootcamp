const express = require('express')
const routes = express.Router()
const teacher = require('./teacher')



routes.get('/', function(req,res){
    return res.redirect("/teachers")
})


routes.get('/teachers', function (req,res){
    return res.render("teachers/index")
})


routes.get('/teachers/create', function(req,res){
    return res.render("teachers/create")
})



routes.get('/students', function(req,res){
    return res.send ("oi")
})


routes.post("/teachers", teacher.post)

module.exports = routes
