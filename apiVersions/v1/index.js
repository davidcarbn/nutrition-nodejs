import express from 'express'
import authController from './controllers/authController'
import userController from './controllers/userController'
import assignUser from './middleware/assignUser'
import cors from 'cors'
const v1 = express.Router()
v1.use(assignUser)
v1.use('/auth',authController)
v1.use('/user',userController)
export default v1