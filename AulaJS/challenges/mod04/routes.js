const express = require('express')
const routes = express.Router()
const teacher = require('./teacher')



routes.get('/', function(req,res){
    return res.redirect("/teachers")
})


routes.get('/teachers', teacher.index)


routes.get('/teachers/create', function(req,res){
    return res.render("teachers/create")
})



routes.get('/students', function(req,res){
    return res.send ("oi")
})


routes.get('/teachers/:id', teacher.show)

routes.get('/teachers/:id/edit', teacher.edit)


routes.put('/teachers', teacher.put)


routes.post("/teachers", teacher.post)

routes.delete("/teachers", teacher.delete)

module.exports = routes
