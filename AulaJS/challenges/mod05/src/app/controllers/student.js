const {age, graduation} = require('../../lib/utils')
const db = require('../../config/db')

module.exports = {

index(req,res){

    return res.render("students/index", )
},


create(req,res){
    return res.render("students/create")
},

post(req, res) {
    const keys = Object.keys(req.body)

    for (key of keys){
        if (req.body[key] == "")
        return res.send ("Please fill blanked fields")
    }

  return
  
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