import express from 'express'
import Food from '../../../models/Food'

const foodController = express.Router()
const insertFood = async (req, res) => {
    try {
        const { name, kcal, protein, sugar, fiber, saturatedFats, transFats, polyunsaturatedFats, monounsaturatedFats } = req.body
        const payload = {
            user: req.user.id,
            name,
            kcal,
            protein,
            sugar,
            fiber,
            saturatedFats,
            transFats,
            polyunsaturatedFats,
            monounsaturatedFats
        }
        const food = await Food.findOneAndUpdate({name,user:req.user.id},payload,{upsert:true})
        res.status(200).json({ food: food })
    } catch (error) {
        console.log(error)
        res.status(500).json({ error })
    }
}
const getFoodById = async (req, res) => {
    try {
        const { id } = req.params
        const food = await Food.findOne({ _id: id })
        res.status(200).json({ food })
    } catch (error) {
        console.log(error)
        res.status(500).json({})
    }
}
const getFoodByUser = async (req, res) => {
    try {
        const food = await Food.find({ user: req.user.id })
        res.status(200).json({ food })
    } catch (error) {
        console.log(error)
        res.status(500).json({})
    }
}
foodController.get('/', getFoodByUser)
foodController.get('/:id', getFoodById)
foodController.post('/', insertFood)
export default foodController