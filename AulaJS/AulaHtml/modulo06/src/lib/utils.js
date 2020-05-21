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
    }
}