const fs = require('fs')
const data = require ('../data.json')

const {age, gradeshow, date} = require('../utils')


exports.index = function(req,res){

    const students = data.students.map(function(student){
        const spreadsubject = {
            ...student,
            grade:gradeshow(student.grade)
        }
        return spreadsubject

    })
    

    return res.render("students/index", {students})
}



exports.create = function(req,res){
    return res.render("students/create")
}

exports.post = function(req, res) {
    const keys = Object.keys(req.body)

    for (key of keys){
        if (req.body[key] == "")
        return res.send ("Please fill blanked fields")
    }


    
    let id =1

    const lastStudent= data.students[data.students.length-1]

    if(lastStudent){
        id= lastStudent.id+1
    }

    data.students.push({
     ...req.body,
     id
    })
    
    
    fs.writeFile("data.json", JSON.stringify(data,null, 4), function (err) {
        if (err) return res.send("write file error")
        
    })
    return res.redirect("./students")
}


exports.show= function (req,res){
    const {id}=  req.params
    const foundstudent = data.students.find(function(student){
        return student.id == id
    })
    if (!foundstudent) return res.send("student not found")

    const student = {
        ...foundstudent,
        grade:gradeshow(foundstudent.grade),
        birth:date(foundstudent.birth).birthDay
       

    }
    return res.render("students/show", {student})
}



exports.edit = function(req,res){
    const {id} = req.params
    const foundstudent = data.students.find(function(student){
        return student.id == id
    })

    if (!foundstudent)  return res.send("student not found")

    const student = {
        ...foundstudent,
        
        
        

    }
    return res.render('students/edit', {student})
}



exports.put = function(req,res){

    const {id} = req.body

    let index = 0

    const foundstudent = data.students.find(function(student, foundindex){

        if (id == student.id){
            index = foundindex
            return true
        }
    })

    if(!foundstudent) return res.send("student not found")

    const student ={
        ...foundstudent,
        ...req.body,
        id:Number(req.body.id)
    }

    data.students[index] = student

    fs.writeFile("data.json", JSON.stringify(data,null,4), function(err){
        if (err) return res.send("Write error")

        return res.redirect(`/students/${id}`)
    })
    
}


exports.delete= function(req,res){
    const{id}= req.body
    const filterIdstudent = data.students.filter(function(student){
        return student.id != id
    })

    data.students = filterIdstudent
    fs.writeFile("data.json", JSON.stringify(data,null, 4), function(err){
        if (err) return res.send("Write error")

        return res.redirect("/students")
    })

}