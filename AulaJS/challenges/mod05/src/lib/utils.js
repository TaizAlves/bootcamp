module.exports ={

    age(timestamp){
       const today = new Date()
       const birthday = new Date(timestamp)

       let age = today.getFullYear() - birthday.getFullYear()
       const month = today.getMonth() - birthday.getMonth()

       if (month <0 || month ==0 && today.getDate() < birthday.getDate() ){
           age= age-1
       }
       return age

    },


    gradeshow(level){

        if (level  == "5ano"){
            return "5º ano do ensino médio"
        }
        else if (level == "6ano"){
            return "6º ano do ensino médio"
        }
        else if (level == "7ano") {
            return "7º ano do ensino médio"
        }
        else if (level == "8ano") {
            return "8º ano do ensino médio"
        }
        else if (level == "9ano") {
            return "9º ano do ensino médio"
        }
        else if (level == "1colegial") {
            return "1º ano do colegial"
        }
        else if (level == "2colegial") {
            return "2º ano do colegial"
        }
        else if (level == "3colegial") {
            return "3º ano do colegial"
        }
        else if (level == "elementary") {
            return "Ensino Médio Completo"
        }
        else if (level == "degree") {
            return "Ensino Superior Completo"
        }
        else if (level == "master") {
            return "Mestrado"
        }
        
        else {
            return "Doutorado"
        }

    },


    class_type(local){
        if (local == "à distância"){
            return "à distância"
        }
        else {
            return "presencial"
        }

    },

    date(timestamp){
        const date = new Date(timestamp)

        const year = date.getUTCFullYear() 

        const month = `0${date.getUTCMonth() +1}`.slice(-2)

        const day = `0${date.getUTCDate()}`.slice(-2)

        return {
        day,
        month,
        year,
        iso:`${year}-${month}-${day}`,
        birthDay: `${day}/${month}`,
        format: `${day}/${month}/${year}`

    }
    }


}