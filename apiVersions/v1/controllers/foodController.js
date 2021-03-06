import express from 'express'
import Diary from '../../../models/Diary'
import Food from '../../../models/Food'

const foodController = express.Router()
const insertFood = async (req, res) => {
    try {
        const { name, kcal, protein,carbohydrates, sugar, fiber,fats, saturatedFats, transFats, polyunsaturatedFats, monounsaturatedFats,
            potassium,phosphate,calcium,sodium,vitamineA,vitamineB1,vitamineB2,vitamineB3,vitamineB5,vitamineB6,
            vitamineB7,vitamineB9,vitamineB12,vitamineC,vitamineD,vitamineE,vitamineK } = req.body
        const payload = {
            user: req.user.id,
            name, kcal, protein,carbohydrates, sugar, fiber,fats, saturatedFats, transFats, polyunsaturatedFats, monounsaturatedFats,
                potassium,phosphate,calcium,sodium,vitamineA,vitamineB1,vitamineB2,vitamineB3,vitamineB5,vitamineB6,
                vitamineB7,vitamineB9,vitamineB12,vitamineC,vitamineD,vitamineE,vitamineK }
        const food = await Food.create(payload)
        res.status(200).json({ food: food })
    } catch (error) {
        console.log(error)
        res.status(500).json({ error })
    }
}
const updateFoodById = async (req, res) => {
    try {
        const { id } = req.params
        const { name, kcal, protein,carbohydrates, sugar, fiber,fats, saturatedFats, transFats, polyunsaturatedFats, monounsaturatedFats,
            potassium,phosphate,calcium,sodium,vitamineA,vitamineB1,vitamineB2,vitamineB3,vitamineB5,vitamineB6,
            vitamineB7,vitamineB9,vitamineB12,vitamineC,vitamineD,vitamineE,vitamineK } = req.body
        const payload = { name, kcal, protein,carbohydrates, sugar, fiber,fats, saturatedFats, transFats, polyunsaturatedFats, monounsaturatedFats,
            potassium,phosphate,calcium,sodium,vitamineA,vitamineB1,vitamineB2,vitamineB3,vitamineB5,vitamineB6,
            vitamineB7,vitamineB9,vitamineB12,vitamineC,vitamineD,vitamineE,vitamineK }
        const food = await Food.findOneAndUpdate({ _id: id }, payload)
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
const deleteFood = async (req, res) => {
    try {
        const {id} = req.params
        const food = await Food.findByIdAndDelete({ _id: id })
        res.status(200).json({success:true})
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }

}
foodController.get('/', getFoodByUser)
foodController.get('/:id', getFoodById)
foodController.put('/:id', updateFoodById)
foodController.post('/', insertFood)
foodController.delete('/:id', deleteFood)
export default foodController