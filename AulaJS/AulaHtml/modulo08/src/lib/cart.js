const { formatPrice } = require('./utils')
// carrinho fica guardado na sessão (req.session)

const Cart = {
    init(oldCart) {
        if(oldCart) {
            this.items = oldCart.items
            this.total = oldCart.total
        }else {
            this.items = []
            this.total ={
                quantity: 0,
                price: 0,
                formattedPrice: formatPrice(0)
            }
        }
        return this
    },
    addOne(product) {
        // ver se já existe no carrinho
        let inCart = this.getCartItem(product.id)

        // se não existe
        if (!inCart) {
            inCart = {
                product: {
                    ...product,
                    formattedPrice: formatPrice(product.price)
                },
                quantity:0,
                price:0,
                formattedPrice: formatPrice(0)
            }
            this.items.push(inCart)
        }
        // verifica a quantidade max do carrinho
        if (inCart.quantity >= product.quantity) return this

        //update item
        inCart.quantity++
        inCart.price = inCart.product.price * inCart.quantity
        inCart.formattedPrice = formatPrice(inCart.price)

        //update cart (total)
        this.total.quantity++
        this.total.price +=  inCart.product.price
        this.total.formattedPrice = formatPrice(this.total.price)

        return this

    },
    removeOne(productId){
        // pegar  item do carrinho
        const inCart = this.getCartItem(productId)

        if(!inCart) return this

        // atualizar o item
        inCart.quantity--
        inCart.price = inCart.product.price * inCart.quantity
        inCart.formattedPrice = formatPrice(inCart.price)

        // atualizar o carrinho
        this.total.quantity--
        this.total.price -= inCart.product.price
        this.total.formattedPrice = formatPrice(this.total.price)

        if (inCart.quantity < 1){
            const itemIndex = this.items.indexOf(inCart)
            this.items.splice(itemIndex, 1)
            return this
        }
        return this
    },
    delete(productId) {
        const inCart = this.getCartItem(productId)
        
        if(!inCart) return this

        if(this.items.length > 0) {
            this.total.quantity -= inCart.quantity
            this.total.price -= (inCart.product.price * inCart.quantity)
            this.total.formattedPrice = formatPrice(this.total.price)
        }

        this.items = this.items.filter(item => inCart.product.id != item.product.id)
        return this

    },

    getCartItem(productId) {
        return this.items.find(item => item.product.id == productId)
    }


}

module.exports = Cart


/*   CONFERINDO ..
const product = {
    id: 1,
    price:199,
    quntity: 2
}

const product2 = {
    id: 2,
    price:229,
    quntity: 1
}

console.log('add first cart item')
let oldCart = Cart.init().addOne(product)
console.log(oldCart)

console.log('add 2 cart item')
 oldCart = Cart.init(oldCart).addOne(product)
console.log(oldCart)

console.log('add 3 cart item')
oldCart = Cart.init(oldCart).addOne(product2)
console.log(oldCart)

console.log('remove 1  item')
oldCart = Cart.init(oldCart).removeOne(product2)
console.log(oldCart)  

console.log('delete  item')
oldCart = Cart.init(oldCart).delete(product.id)
console.log(oldCart)  

*/

