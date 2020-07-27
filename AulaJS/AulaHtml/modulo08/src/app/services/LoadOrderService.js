const Order = require('../models/Order')
const User= require('../models/User')
const LoadProductService = require('./LoadProductService')

const {formatPrice, date } = require('../../lib/utils')




async function format(order) {
    //detalhes do pproduto
    order.product = await LoadProductService.load('product', {
        where: { id: order.product_id}
    })

    //detalhes do comprador
    order.buyer = await User.findOne({
        where: { id: order.buyer_id}
    })

    // detalhes do vendedor
    order.seller = await User.findOne({
        where: { id: order.seller_id}
    })

    //formatação de preço
    order.formattedPrice = formatPrice(order.price)
    order.formattedTotal = formatPrice(order.total)

    //formatação do status
    const statuses = {
        open:'Aberto',
        sold:'Vendido',
        cancelled: 'Cancelado'
    }

    order.formattedStatus = statuses[order.status] //é == a status.open

    // formatação de atualizado em...
    const updatedAt = date(order.updated_at)
    
    order.formattedUpdatedAt = `${order.formattedStatus} em ${updatedAt.day}/${updatedAt.month}/${updatedAt.year} 'as ${updatedAt.hour}h${updatedAt.minute}`

    return order

    }   

  


const LoadService = {
    load(service, filter){
        this.filter = filter
        return this[service]()

    },
    async order(){
        try{
            const order = await Order.findOne(this.filter)
            return format(order)

        }catch(err){
            console.error(err)
        }

    },
    async orders(){
        try{
            const orders = await Order.findAll( this.filter)

            const ordersPromise = orders.map(format)  //product => format(product))

            return Promise.all(ordersPromise)

        }catch (err){
            console.error(err)
        }
    },
    format,

}



module.exports = LoadService