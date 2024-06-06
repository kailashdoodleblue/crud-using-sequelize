const express=require('express')
const router=express.Router()
const adminController=require('../controller/adminController')

router.post('/login',adminController.login)
router.post('/signup',adminController.signup)

module.exports=router