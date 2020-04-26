const fs = require ('fs')
const data = require ("./data.json")
const {age, date} = require('./utils')

exports.index = function(req,res){
    return res.render("instructors/index", {instructors:data.instructors})
}



// show
exports.show = function(req,res){
    //req.params
    const {id} = req.params
    const foundInstructor = data.instructors.find(function(instructor){
        return instructor.id ==id
    })
    if (!foundInstructor) return res.send ("Instructor not found")

    

    const instructor = {
        ...foundInstructor, // coloca tudo o que tem dentro do foundInstructor
        age: age(foundInstructor.birth),
        services: foundInstructor.services.split(','),
        created_at: new Intl.DateTimeFormat('en-GB').format(foundInstructor.created_at) ,
    }

    return res.render("instructors/show", {instructor})
}




// create
exports.post = function(req,res){
   
    const keys = Object.keys(req.body) // cria uma lista das chaves 
    // req.body = retorna uma lista do que foi preenchido junto com a chave
    for (key of keys){
         if (req.body[key] == "")
            return res.send("Please, fill all fields!")
    }

    //para desestruturar estas informações do req.body

    let {avatar_url, birth, name,gender, services} = req.body

    birth = Date.parse(req.body.birth)
    const created_at = Date.now()
    const id =Number(data.instructors.length +1)


    //data.instructors.push(req.body)  //pega TODAS as informações do req.body e coloca em data.json-  
    // neste caso usa para criar + :
    //req.body.created_at = Date.now()
    
    
    data.instructors.push({
        id,
        avatar_url,
        name,
        gender,
        birth,
        services,
        created_at
    })



    fs.writeFile("data.json", JSON.stringify(data, null,2), function(err){
        if (err) return res.send ("Write file error")

        return res.redirect("./instructors")
    })

    //return res.send(req.body)  vê o que foi enviado
}


// edit
exports.edit = function(req,res){
    const {id} = req.params
    const foundInstructor = data.instructors.find(function(instructor){
        return instructor.id ==id
    })
    if (!foundInstructor) return res.send ("Instructor not found")

    const instructor ={
        ...foundInstructor,
        birth:date(foundInstructor.birth)
        
    }
    
    return res.render ('instructors/edit', {instructor})
}


//update - atualizar PUT (salvar no backend)

exports.put = function(req,res){

    const {id} = req.body

    let index = 0

    const foundInstructor = data.instructors.find(function(instructor, foundindex){
        if (id == instructor.id){
            index= foundindex
            return true
        }
        
    })
    if (!foundInstructor) return res.send ("Instructor not found")

    const instructor ={
        ...foundInstructor,
        ...req.body,
        birth: Date.parse(req.body.birth),
        id: Number(req.body.id)

    }

    data.instructors[index] = instructor

    fs.writeFile("data.json", JSON.stringify(data, null,2), function(err){
        if (err) return res.send("Write error")

        return res.redirect(`/instructors/${id}`)
    })
}


//DELETE

exports.delete = function(req,res){
    const {id} = req.body

    const filteredInstructors = data.instructors.filter(function(instructor){
        return instructor.id != id
    })
    data.instructors = filteredInstructors
    fs.writeFile("data.json", JSON.stringify(data,null,2), function(err){
        if (err) return res.send("Write file error")

        return res.redirect("/instructors")
    })

}

