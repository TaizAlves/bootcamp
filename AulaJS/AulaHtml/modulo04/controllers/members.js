const fs = require ('fs')
const data = require ("../data.json")
const { date} = require('../utils')

exports.index = function(req,res){
    return res.render("members/index", {members:data.members})
}


// show


exports.create = function(req,res){
    return res.render("members/create")}



exports.post = function(req,res){
   
    const keys = Object.keys(req.body) // cria uma lista das chaves 
    // req.body = retorna uma lista do que foi preenchido junto com a chave
    for (key of keys){
         if (req.body[key] == "")
            return res.send("Please, fill all fields!")
    }


    birth = Date.parse(req.body.birth)

    let id =1
    
    const lastMember= data.members[data.members.length-1]

    if (lastMember){
        id = lastMember.id+1
    }
    
    
    data.members.push({
        ...req.body,
        id,
       birth,
       
    })



    fs.writeFile("data.json", JSON.stringify(data, null,2), function(err){
        if (err) return res.send ("Write file error")

        return res.redirect("./members")
    })

}


exports.show = function(req,res){
    //req.params
    const {id} = req.params
    const foundmember = data.members.find(function(member){
        return member.id ==id
    })
    if (!foundmember) return res.send ("member not found")

    

    const member = {
        ...foundmember, // coloca tudo o que tem dentro do foundmember
        birth: date(foundmember.birth).birthDay,
        
    }

    return res.render("members/show", {member})
}


exports.edit = function(req,res){
    const {id} = req.params
    const foundmember = data.members.find(function(member){
        return member.id ==id
    })
    if (!foundmember) return res.send ("member not found")

    const member ={
        ...foundmember,
        birth:date(foundmember.birth).iso
        
    }
    
    return res.render ('members/edit', {member})
}


//update - atualizar PUT (salvar no backend)

exports.put = function(req,res){

    const {id} = req.body

    let index = 0

    const foundmember = data.members.find(function(member, foundindex){
        if (id == member.id){
            index= foundindex
            return true
        }
        
    })
    if (!foundmember) return res.send ("member not found")

    const member ={
        ...foundmember,
        ...req.body,
        birth: Date.parse(req.body.birth),
        id: Number(req.body.id)

    }

    data.members[index] = member

    fs.writeFile("data.json", JSON.stringify(data, null,2), function(err){
        if (err) return res.send("Write error")

        return res.redirect(`/members/${id}`)
    })
}


//DELETE

exports.delete = function(req,res){
    const {id} = req.body

    const filteredmembers = data.members.filter(function(member){
        return member.id != id
    })
    data.members = filteredmembers
    fs.writeFile("data.json", JSON.stringify(data,null,2), function(err){
        if (err) return res.send("Write file error")

        return res.redirect("/members")
    })

}

