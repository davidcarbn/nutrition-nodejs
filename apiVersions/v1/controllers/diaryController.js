import express from 'express'
import Diary from '../../../models/Diary'


const diaryController = express.Router()
const getDiaryEntry = async (req, res) => {
    try {
        const {id} = req.user
        const {date} = req.params
        const diaryEntry = await Diary.findOne({user:id,date:date})
            .populate({path:'breakfast',populate: {path:'food'}})
            .populate({path:'lunch',populate: {path:'food'}})
            .populate({path:'dinner',populate: {path:'food'}})
            .populate({path:'snacks',populate: {path:'food'}})
            
        res.status(200).json({diaryEntry})
    } catch (error) {
        res.status(500).json({error})
    }
}
const insertDiaryEntry = async (req, res) => {
    try {
        const { id } = req.user
        const {date} = req.params
        /*
        {
            date: date,
            food: {
                breakfast: {
                    ObjectID: objID,
                    amount: amt
                }
            }
        }
        */
        const { entry } = req.body
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
        const {amount} = req.body
        const mealid = mealtime+'._id'
        const mealamount =mealtime+'.$.amount'
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
        const mealid = mealtime+'._id'
        const mealamount =mealtime+'.$.amount'
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