import express from 'express'
import Food from '../../../models/Food'
const searchController = express.Router()
const searchFood = async (req, res) => {
    try {
        const { searchOwn = false } = req.body
        
        const { name } = req.params
        let foods
        
        if (searchOwn) {
             foods = await Food.find({
                user: req.user.id,
            name: {
                $regex: name,
                $options: "i"
            }
        })
        } else {
             foods = await Food.find({
                user: {$exists: false},
                name: {
                    $regex: name,
                    $options: "i"
                }
            })
        }
        
        res.status(200).json({ foods })
    } catch (error) {
        console.log(error)
        res.status(500).json({})
    }

}
searchController.post('/:name', searchFood)
export default searchController