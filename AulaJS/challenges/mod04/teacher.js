const fs = require('fs')
const data = require ('./data.json')
const {age, graduation} = require('./utils')

exports.post = function(req, res) {
    const keys = Object.keys(req.body)

    for (key of keys){
        if (req.body[key] == "")
        return res.send ("Please fill blanked fields")
    }

    req.body.created_at = Date.now()
    req.body.id = Number(data.teachers.length +1)

    data.teachers.push(req.body)
    
    
    fs.writeFile("data.json", JSON.stringify(data,null, 4), function (err) {
        if (err) return res.send("write file error")
        
    })
    return res.redirect("./teachers")
}


exports.show= function (req,res){
    const {id}=  req.params
    const foundTeacher = data.teachers.find(function(teacher){
        return teacher.id == id
    })
    if (!foundTeacher) return res.send("Teacher not found")

    const teacher = {
        ...foundTeacher,
        age: age(foundTeacher.birth),
        graduation: graduation(foundTeacher.graduation),
        subject: foundTeacher.subject.split(','),
        created_at: new Intl.DateTimeFormat('pt-BR').format(foundTeacher.created_at)
       

    }
    return res.render("teachers/show", {teacher})
}



exports.edit = function(req,res){
    const {id} = req.params
    const foundTeacher = data.teachers.find(function(teacher){
        return teacher.id == id
    })

    if (!foundTeacher)  return res.send("Teacher not found")

    const teacher = {
        ...foundTeacher,
        graduation: graduation(foundTeacher.graduation),
        

    }
    return res.render('teachers/edit', {teacher})
}



exports.put = function(req,res){

    const {id} = req.body

    let index = 0

    const foundTeacher = data.teachers.find(function(teacher, foundindex){

        if (id == teacher.id){
            index = foundindex
            return true
        }
    })

    if(!foundTeacher) return res.send("Teacher not found")

    const teacher ={
        ...foundTeacher,
        ...req.body
    }

    data.teachers[index] = teacher

    fs.writeFile("data.json", JSON.stringify(data,null,4), function(err){
        if (err) return res.send("Write error")

        return res.redirect(`/teachers/${id}`)
    })
    
}


exports.delete= function(req,res){
    const{id}= req.body
    const filterIdteacher = data.teachers.filter(function(teacher){
        return teacher.id != id
    })

    data.teachers = filterIdteacher
    fs.writeFile("data.json", JSON.stringify(data,null, 4), function(err){
        if (err) return res.send("Write error")

        return res.redirect("/teachers")
    })

}