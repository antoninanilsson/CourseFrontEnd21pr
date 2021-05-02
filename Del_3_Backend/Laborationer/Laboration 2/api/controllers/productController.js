const route = require('express').Router()
const productService = require('../services/productService');
const authService=require('../services/authService')


// unsecured routs, för vanliga användare 
route.get('/', productService.getAll)
route.get('/:id', productService.getOne)

// secured routes


//route.post('/edit/new',  authService.requireAuth, productService.create)
route.post('/edit/new',  productService.create)
route.post('/edit/load/:fileName',  authService.requireAuth, productService.loadData)

route.patch('/edit/:id',  authService.requireAuth,productService.update);

route.delete('/edit/:id',  authService.requireAuth, productService.deleteOne)
route.delete('/edit/delete/all', authService.requireAuth,  productService.deleteAll)




module.exports=route; 