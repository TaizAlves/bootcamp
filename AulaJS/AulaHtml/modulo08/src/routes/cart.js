
const express = require('express')
const routes = express.Router()  // responsavel pelas rotas

const CartController = require('../app/controllers/CartController')


// login  /logout
routes.get('/', CartController.index)
routes.post('/:id/add-one', CartController.addOne)
routes.post('/:id/remove-one', CartController.removeOne)
routes.post('/:id/delete', CartController.delete)





module.exports = routes // para exportar //routes