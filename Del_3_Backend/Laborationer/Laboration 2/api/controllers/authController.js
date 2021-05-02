const route=require('express').Router()
const authService=require('../services/authService')

// unsecured

route.post('/signup',authService.signUp);
route.post('/signin',authService.signIn)

module.exports=route;