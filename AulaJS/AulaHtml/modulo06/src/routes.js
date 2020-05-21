const express = require('express')
const routes = express.Router()  // responsavel pelas rotas
const multer = require('./app/middlewares/multer')
const ProductController = require('./app/controllers/ProductController')

routes.get('/', function(req,res) {

    return res.render("layout.njk")
})

routes.get('/products/create', ProductController.create)
routes.get('/products/:id', ProductController.show)
routes.get('/products/:id/edit', ProductController.edit)

routes.post('/products',multer.array("photos",6) ,ProductController.post)
routes.put('/products',multer.array("photos",6), ProductController.put)
routes.delete('/products', ProductController.delete)

//ALIAS - atalhos
routes.get('/ads/create', function(req,res) {

    return res.redirect("/products/create")
})




module.exports = routes // para exportar routes


