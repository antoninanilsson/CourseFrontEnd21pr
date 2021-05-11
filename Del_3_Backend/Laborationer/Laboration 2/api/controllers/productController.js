const route = require('express').Router()
const productService = require('../services/productService');
const authService=require('../services/authService')


// unsecured routs, för vanliga användare 
route.get('/', productService.getAll)
route.get('/:id', productService.getOne)

// secured routes


//route.post('/edit/new',  authService.requireAuth, productService.create)
route.post('/', authService.requireAuth, productService.create)
route.post('/:fileName',  authService.requireAuth, productService.loadData)

route.patch('/:id',  authService.requireAuth,productService.update);

// id för ta bort ett produkt och 'all' för ta bort alla produkter 
route.delete('/:id',  authService.requireAuth, productService.deleteProduct)






module.exports=route; 