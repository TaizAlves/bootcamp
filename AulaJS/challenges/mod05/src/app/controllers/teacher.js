const {age, graduation, date} = require('../../lib/utils')
const db = require('../../config/db')

module.exports = {

index(req,res){

    return res.render("teachers/index", )
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

    const query = `
        INSERT INTO teachers(
            name,
            avatar_url,
            birth_date,
            education_level,
            class_type,
            subject,
            created_at
        ) VALUES ($1,$2,$3,$4,$5,$6,$7)
        RETURNING id   
    `

    const values = [
        req.body.name,
        req.body.avatar_url,
        date(req.body.birth).iso,
        req.body.graduation,
        req.body.location,
        req.body.subject,
        date(Date.now()).iso

    ]


    db.query(query,values, function(err,results){
        if (err) return res.send ("Database error")

        return res.redirect(`/teachers/${results,rows[0].id}`)
    })
  
},


show(req,res){
   
    return 
},



edit(req,res){
    
    return 
},



put(req,res){

    const keys = Object.keys(req.body)

    for (key of keys){
        if (req.body[key] == "")
        return res.send ("Please fill blanked fields")
    }
    return
    
},


delete(req,res){
  return

},

}