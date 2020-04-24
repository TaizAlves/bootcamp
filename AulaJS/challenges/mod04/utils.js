module.exports ={

    age: function(timestamp){
       const today = new Date()
       const birthday = new Date(timestamp)

       let age = today.getFullYear() - birthday.getFullYear()
       const month = today.getMonth() - birthday.getMonth()

       if (month <0 || month ==0 && today.getDate() < birthday.getDate()){
           age= age-1
       }
       return age

    },

    graduation: function(level){

        if (level  == "elementary"){
            return "Ensino Médio Completo"
        }
        else if (level == "degree"){
            return "Ensino Superior Completo"
        }
        else if (level == "Master") {
            return "Mestrado"
        }
        else {
            return "Doutorado"
        }

    }







}