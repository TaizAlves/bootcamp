const fs = require ('fs')
const data = require ("./data.json")



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


//uppdate


//delete

