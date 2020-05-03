const {age, gradeshow, date, class_type} = require('../../lib/utils')
const Teacher = require('../models/teacherdb')

module.exports = {

    index(req,res){

        const {filter} = req.query
        
        if(filter){
            Teacher.findby(filter,function(teachers){
                return res.render("teachers/index", {teachers, filter} )

            })

        } else{

            Teacher.all(function(teachers) {
    
                return res.render("teachers/index", {teachers} )
            })
        }
        
    },


    create(req,res){
        return res.render("teachers/create")
    },

    post(req, res) {
        const keys = Object.keys(req.body)

        for (key of keys){
            if (req.body[key] == "")
            return res.send ("Please fill blanked fields")
        }

        Teacher.create(req.body, function(teacher){
            return res.redirect(`/teachers/${teacher.id}`)
        })
    
    },


    show(req,res){
        
        Teacher.find(req.params.id, function(teacher){
            if (!teacher) return res.send("Teacher not found")

            teacher.age= age(teacher.birth)
            teacher.subject= teacher.subject.split(",")
            teacher.created_at= date(teacher.created_at).format
            teacher.graduation= gradeshow(teacher.graduation)
            teacher.location= class_type(teacher.location)

            return res.render("teachers/show", {teacher})
        })

    },



    edit(req,res){
        Teacher.find(req.params.id, function(teacher){
            if(!teacher) return res.send("Teacher not found")

            teacher.birth= date(teacher.birth).iso

            return res.render("teachers/edit", {teacher})

        })
    },



    put(req,res){

        const keys = Object.keys(req.body)

        for (key of keys){
            if (req.body[key] == "")
            return res.send ("Please fill blanked fields")
        }

        Teacher.update(req.body, function(){
            return res.redirect(`/teachers/${req.body.id}`)
        })    
    },


    delete(req,res){
        Teacher.delete(req.body.id,function(){
            return res.redirect(`/teachers`)
        })

    },

}