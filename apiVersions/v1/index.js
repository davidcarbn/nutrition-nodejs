import express from 'express'
import authController from './controllers/authController'
import userController from './controllers/userController'
import foodController from './controllers/foodController'
import diaryController from './controllers/diaryController'
import assignUser from './middleware/assignUser'
import searchController from './controllers/searchController'
import authorization from './middleware/authorization'
import adminController from './controllers/adminController'


const v1 = express.Router()
v1.use(assignUser)
v1.use(authorization)
v1.use('/auth',authController)
v1.use('/user',userController)
v1.use('/food',foodController)
v1.use('/diary',diaryController)
v1.use('/search',searchController)
v1.use('/admin',adminController)

export default v1