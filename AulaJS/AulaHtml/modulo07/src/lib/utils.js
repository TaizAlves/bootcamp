module.exports = {


    date(timestamp){
        const date = new Date(timestamp)

        const year = date.getFullYear() // UTC para ser universal

        const month = `0${date.getMonth() +1}`.slice(-2)// p.q é de 0 a 11

        const day = `0${date.getDate()}`.slice(-2)

        const hour = date.getHours()
        const minute = date.getMinutes()

        return {
        day,
        month,
        year,
        hour,
        minute,
        iso:`${year}-${month}-${day}`,
        birthDay: `${day}/${month}`,
        format: `${day}/${month}/${year}`

    }
    },

    formatPrice(price){
        return new Intl.NumberFormat('pt-Br', {
            style: 'currency', // 1.000,00
            currency: 'BRL'
        }).format(price/100)
    },
    formatCpfCnpj(value){
        value =value.replace(/\D/g,"")
 
        if(value.length > 14)
             value = value.slice(0,-1)
 
        // cpf or cnpj check
        if (value.length > 11 ){
         value = value.replace(/(\d{2})(\d)/,"$1.$2")  // 11.22330304
         value = value.replace(/(\d{3})(\d)/,"$1.$2")  // 11.223.33444
         value = value.replace(/(\d{3})(\d)/,"$1/$2")  // 11.223.334/000130
         value = value.replace(/(\d{4})(\d)/,"$1-$2")  // 11.223.334/0001-30
 
        }else {
             value = value.replace(/(\d{3})(\d)/,"$1.$2")
             value = value.replace(/(\d{3})(\d)/,"$1.$2")
             value = value.replace(/(\d{3})(\d)/,"$1-$2")

        }
 
        return value
    },
 
    formatCep(value){
     value = value.replace(/\D/g, "")
 
     if (value.length > 8)
         value = value.slice(0,-1)
 
     value = value.replace(/(\d{5})(\d)/,"$1-$2")
 
     return value
 
    }
}