const express = require('express')
const routes = express.Router()
const teacher = require('./controllers/teacher')
const student = require('./controllers/student')



routes.get('/', function(req,res){
    return res.redirect("/teachers")
})

routes.get('/teachers', teacher.index)

routes.get('/teachers/create', teacher.create)

routes.get('/teachers/:id', teacher.show)

routes.get('/teachers/:id/edit', teacher.edit)

routes.put('/teachers', teacher.put)

routes.post("/teachers", teacher.post)

routes.delete("/teachers", teacher.delete)



routes.get('/students', student.index)

routes.get('/students/create', student.create)

routes.get('/students/:id', student.show)

routes.get('/students/:id/edit', student.edit)

routes.put('/students', student.put)

routes.post("/students", student.post)

routes.delete("/students", student.delete)









module.exports = routes
