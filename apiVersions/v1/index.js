import express from 'express'
import authController from './controllers/authController'
import userController from './controllers/userController'

const v1 = express.Router()

v1.use('/auth',authController)
v1.use('/user',userController)
export default v1