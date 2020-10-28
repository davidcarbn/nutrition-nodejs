import express from 'express'
import Food from '../../../models/Food'
const searchController = express.Router()
const searchFood = async (req, res) => {
    try {
        const exclude = {protein:0,carbohydrates:0, sugar:0, fiber:0,fats:0, saturatedFats:0, transFats:0, polyunsaturatedFats:0, monounsaturatedFats:0,
            potassium:0,phosphate:0,calcium:0,sodium:0,vitamineA:0,vitamineB1:0,vitamineB2:0,vitamineB3:0,vitamineB5:0,vitamineB6:0,
            vitamineB7:0,vitamineB9:0,vitamineB12:0,vitamineC:0,vitamineD:0,vitamineE:0,vitamineK:0}
        const { searchOwn = false } = req.body
        
        const { name } = req.params
        let foods
        
        if (searchOwn) {
             foods = await Food.find({
                user: req.user.id,
            name: {
                $regex: '^'+name,
                $options: "i"
            }
        },exclude)
        } else {
             foods = await Food.find({
                user: {$exists: false},
                name: {
                    $regex: '^'+name,
                    $options: "i"
                }
            },exclude)
        }
        console.log(foods)
        res.status(200).json({ foods })
    } catch (error) {
        console.log(error)
        res.status(500).json({})
    }

}
searchController.post('/:name', searchFood)
export default searchController