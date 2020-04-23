const fs = require('fs')
const data = require ('./data.json')

exports.post = function(req, res) {
    const keys = Object.keys(req.body)

    for (key of keys){
        if (req.body[key] == "")
        return res.send ("Please fill blanked fields")
    }

    req.body.created_at = Date.prototype.toDateString
    req.body.id = Number(data.teachers.length +1)

    data.teachers.push(req.body)
    
    
    fs.writeFile("data.json", JSON.stringify(data,null, 4), function (err) {
        if (err) return res.send("write file error")
        
    })
    return res.redirect("./teachers")
}