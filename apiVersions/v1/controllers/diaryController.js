import express from 'express'
import Diary from '../../../models/Diary'
import {isDate,isMongoId} from 'validator'

const diaryController = express.Router()
const getDiaryEntry = async (req, res) => {
    try {
        const {id} = req.user
        const {date} = req.params

        // validation
        if (!date || !isDate(new Date(date))) {
            res.status(400).json({error: "Missing or Wrong arguments"})
            return
        }
        const diaryEntry = await Diary.findOne({user:id,date:date})
            .populate({path:'breakfast',populate: {path:'food'}})
            .populate({path:'lunch',populate: {path:'food'}})
            .populate({path:'dinner',populate: {path:'food'}})
            .populate({path:'snacks',populate: {path:'food'}})
        console.log(diaryEntry)
        res.status(200).json({diaryEntry})
    } catch (error) {
        res.status(500).json({error})
    }
}
const insertDiaryEntry = async (req, res) => {
    try {
        const { id } = req.user
        const { date } = req.params
        const { entry } = req.body
        
        /* Validation:
        entry: {
            dinner / breakfast / lunch / snacks: {
                food:
                amount:
            }
        }
        */
        if (!date || !isDate(new Date(date))) {
            res.status(400).json({error: "missing or wromg arguments"})
            return
        }
        const  { breakfast, dinner, lunch, snacks } = entry
        if (!breakfast && !dinner && !lunch && !snacks) {
            res.status(400).json({error: "missing or wromg arguments"})
            return
        }
        if (breakfast && (!breakfast.food || !breakfast.amount)) {
            res.status(400).json({error: "missing or wromg arguments"})
            return
        }
        if (dinner && (!dinner.food || !dinner.amount)) {
            res.status(400).json({error: "missing or wromg arguments"})
            return
        }
        if (lunch && (!lunch.food || !lunch.amount)) {
            res.status(400).json({error: "missing or wromg arguments"})
            return
        }
        if (snacks && (!snacks.food || !snacks.amount)) {
            res.status(400).json({error: "missing or wromg arguments"})
            return
        }
       
        const diaryEntry = await Diary.findOneAndUpdate({
            user: id,
            date: date
        }, {
            user: id,
            date: date,
            $push: entry
        }, {
            upsert: true,
            new: true
        })
        res.status(200).json({diaryEntry})
    } catch (error) {
        res.status(500).json({ error })
    }
}
const deleteDiaryEntry = async (req, res) => {
    try {
        const userId = req.user.id
        const {date,mealtime,id} = req.params
        // validation
        if (!date || !isDate(new Date(date)) || !mealtime || typeof mealtime !== "string" || !id || !isMongoId(id)) {
            res.status(400).json({error: "missing or wrong arguments"})
            return
        }
        if (!["breakfast","dinner","lunch","snacks"].includes(mealtime)) {
            res.status(400).json({error: "missing or wrong arguments"})
            return
        }

        let query = {
            user:userId,
            date:date
        }
        let updateContent = {
            '$pull': {
                [mealtime]: {_id:id}
            }
        }
        const diary =  await Diary.updateOne(query,updateContent)
        res.json({diary})
    } catch (error) {
        console.log(error)
        res.status(500).json({error})
    }
}
const updateDiaryEntry = async (req,res) => {
    try {
        const userId = req.user.id
        const {date,mealtime,id} = req.params
        const {amount} = req.body
        //validation
        if (!date || !isDate(new Date(date)) || !mealtime || typeof mealtime !== "string" || !id || !isMongoId(id)) {
            res.status(400).json({error: "missing or wrong arguments"})
            return
        }
        if (!["breakfast","dinner","lunch","snacks"].includes(mealtime)) {
            res.status(400).json({error: "missing or wrong arguments"})
            return
        }
        if (!amount || typeof amount !== "number") {
            res.status(400).json({error: "missing or wrong arguments"})
            return
        }

        let query = {
            user:userId,
            date:date,
            [mealtime+'._id']: id
        }
        let updateContent = {
            '$set': {
                [mealtime+'.$.amount']: amount
            }
        }
        const diary =  await Diary.update(query,updateContent)
        res.json({diary})
    } catch (error) {
        console.log(error)
        res.status(500).json({error})
    }
}
diaryController.get('/:date', getDiaryEntry)
diaryController.post('/:date', insertDiaryEntry)
diaryController.put('/:date/:mealtime/:id',updateDiaryEntry)
diaryController.delete('/:date/:mealtime/:id', deleteDiaryEntry)
export default diaryController

