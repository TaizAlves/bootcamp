const LoadProductService = require('../services/LoadProductService')
const User = require('../models/User')

const mailer = require('../../lib/mailer')

const email = (seller, product, buyer) =>`
<h2>Olá ${seller.name}</h2>
<p>Você tem um novo pedido de compra do seu produto </p>
<p>Produto: ${product.name}</p> 
<p>Preço: ${product.formattedPrice}</p> 
<p><br/><br/></p> 
<h3>Dados do comprador</h3>
<p>${buyer.name}</p> 
<p>${buyer.email}</p> 
<p>Endereço: ${buyer.address}</p> 
<p>${buyer.cep}</p> 
<p><br/><br/></p> 
<p><strong>Entre em contato como comprador para finalizar a venda.</strong></p> 
<p><br/><br/></p> 
<p>Atenciosamente, Equipe LaunchStore</p> 

`

module.exports= {
    async post(req,res){

        try{
        //pegar  os dados do produto
            const product = await LoadProductService.load('product', { where: {
                id: req.body.id
            }})

        //pegar os dados do vendedor
            const seller = await User.findOne( { where: { id: product.user_id}})

        //pegar os dados do comprador
            const buyer = await User.findOne( { where: { id: req.session.userId}})


        //enviar email com dados da compra para o vendedor
            await mailer.sendMail( {
                to: seller.email,
                from: 'no-replay@lauchstore.com.br',
                subject: 'Novo Pedido de Compra',
                html:email(seller, product, buyer)
            })

        //notificar usuário com msg de sucesso ou erro

            return res.render('orders/success')



            
    
        }catch(err) {
            console.error(err)
            return res.render('orders/error')

        }
    }
}