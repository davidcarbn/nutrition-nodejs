import express from 'express'
import foodManagerController from './admin/foodManagerController'

const adminController = express.Router()

adminController.use('/food',foodManagerController)

export default adminController