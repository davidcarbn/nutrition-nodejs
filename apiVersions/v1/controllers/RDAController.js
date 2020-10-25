import express from 'express'
import RDA from '../../../models/RDA'

const RDAController = express.Router()

const getRDAByUser = async (req,res) => {
    try {
        const {id} = req.user
        const rda = await RDA.findOne({user: id})
        console.log(rda)
        res.status(200).json(rda)
    } catch (error) {
        res.status(500).end()
    }
}
const updateRDAByUser = async (req,res) => {
    try {
        const {id} = req.user
        const rda = await RDA.findOneAndUpdate({user: id},req.body)
        res.status(200).json(rda)
    } catch (error) {
        res.status(500).end()
    }
}

RDAController.get('/',getRDAByUser)
RDAController.put('/',updateRDAByUser)
export default RDAController