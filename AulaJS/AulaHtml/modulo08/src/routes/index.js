const express = require('express')
const routes = express.Router()  // responsavel pelas rotas

const HomeController = require('../app/controllers/HomeController')

const products = require('./products')
const users = require('./users')


//HOME
routes.get('/', HomeController.index)

routes.use('/products', products)
routes.use('/users', users)



//ALIAS - atalhos
routes.get('/ads/create', function(req,res) {

    return res.redirect("/products/create")
})

routes.get('/accounts', function(req,res) {

    return res.redirect("/users/login")
})




module.exports = routes // para exportar routes

