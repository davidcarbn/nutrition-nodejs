import mongoose from 'mongoose'
import Diary from './Diary'

const FoodSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: false
    },
    name: {
        type: String,
        required: true,
    },
    kcal: {
        type: Number
    },
    carbohydrates: {
        type: Number
    },
    sugar: {
        type: Number
    },
    fiber: {
        type: Number
    },
    protein: {
        type: Number
    },
    fats: {
        type: Number
    },
    saturatedFats: {
        type: Number
    },
    transFats: {
        type: Number
    },
    polyunsaturatedFats: {
        type: Number
    },
    monounsaturatedFats: {
        type: Number
    },
    potassium: {
        type: Number
    },
    phosphate: {
        type: Number
    },
    calcium: {
        type: Number
    },
    sodium: {
        type: Number
    },
    vitamineA: {
        type: Number
    },
    vitamineB1: {
        type: Number
    },
    vitamineB2: {
        type: Number
    },
    vitamineB3: {
        type: Number
    },
    vitamineB5: {
        type: Number
    },
    vitamineB6: {
        type: Number
    },
    vitamineB7: {
        type: Number
    },
    vitamineB9: {
        type: Number
    },
    vitamineB12: {
        type: Number
    },
    vitamineC: {
        type: Number
    },
    vitamineD: {
        type: Number
    },
    vitamineE: {
        type: Number
    },
    vitamineK: {
        type: Number
    }
})

FoodSchema.post('findOneAndDelete', async function (doc, next) {
    try {
        await Diary.updateMany({},{
                $pull: {
                    "breakfast": { "food": doc._id },
                    "lunch": { "food": doc._id },
                    "dinner": { "food": doc._id },
                    "snacks": { "food": doc._id },
                }
            },
            { "multi": true },
            next
        )
    } catch (error) {
        res.status(500)
    }
})

export default mongoose.models.Food || mongoose.model('Food', FoodSchema)