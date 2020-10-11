import express from 'express'
import Food from '../../../../models/Food'

const foodManagerController = express.Router()

const insertFood = async (req,res) => {
    const { name, kcal, protein, sugar, fiber, saturatedFats, transFats, polyunsaturatedFats, monounsaturatedFats } = req.body
        const payload = {
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
        const food = await Food.create(payload)
        res.status(200).json({ food: food })
}

foodManagerController.post('/',insertFood)

export default foodManagerController