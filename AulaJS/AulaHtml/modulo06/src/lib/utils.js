module.exports = {


    date(timestamp){
        const date = new Date(timestamp)

        const year = date.getUTCFullYear() // UTC para ser universal

        const month = `0${date.getUTCMonth() +1}`.slice(-2)// p.q é de 0 a 11

        const day = `0${date.getUTCDate()}`.slice(-2)

        return {
        day,
        month,
        year,
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