import mongoose from 'mongoose'

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
    sugar: {
        type: Number
    },
    fiber: {
        type: Number
    },
    protein: {
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
    }
})

export default mongoose.models.Food || mongoose.model('Food', FoodSchema)