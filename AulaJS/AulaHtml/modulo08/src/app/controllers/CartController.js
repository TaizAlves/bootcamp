const Cart = require('../../lib/cart')

const LoadProductService = require('../services/LoadProductService')
const { removeOne } = require('../../lib/cart')

module.exports= {
    async index(req,res){

        try{

            let { cart } = req.session

            // gerenciador de carrinho
            cart = Cart.init(cart)

            return res.render("cart/index", { cart })
        
            
    
        }catch(err) {
            console.error(err)
        }
    },

    async addOne(req,res){
        // pegar o id e o produto

        const { id } = req.params

        const product = await LoadProductService.load('product', {where: { id }})


        //pegar o carrinho da sessão
        let { cart } = req.session

        // adicionar o produto ao carrinho (usando o gerenciador de carrinho)

        cart = Cart.init(cart).addOne(product)


        // atualizar o carrinho da sessão

        req.session.cart = cart

        //redirecionar o usúario para a tela do carrinho

        return res.redirect('/cart')

    },

    removeOne(req,res) {
        //pegar o id do produto
        let { id } = req.params
        //pegar o carrinho da sessão

        let { cart } = req.session

        //se não tiver carrinho, retorna
        if(!cart) return res.redirect('/cart')

        // iniciar o carrinho (gerenciador de carrinho)
        cart = Cart.init(cart).removeOne(id)

        // atualizar o carrinho da sessão, removendo o item
        req.session.cart = cart

        //redicionar para a pagina cart
        return res.redirect('/cart')

    },
    delete(req,res) {

        let { id } =  req.params
        let { cart } = req.session
        if (!cart) return res.redirect('/cart')

        cart = Cart.init(cart).delete(id)

        req.session.cart = cart

        return res.redirect('/cart')
    }
}
