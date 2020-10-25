import mongoose from 'mongoose'

const RDASchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    kcal: {
        type: Number,
        default: 2000
    },
    carbohydrates: {
        type: Number,
        default: 264
    },
    sugar: {
        type: Number
    },
    fiber: {
        type: Number
    },
    protein: {
        type: Number,
        default: 72
    },
    fats: {
        type: Number,
        default: 66
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
        type: Number,
        default: 4000
    },
    phosphate: {
        type: Number,
        default: 700
    },
    calcium: {
        type: Number,
        default: 1000
    },
    sodium: {
        type: Number,
        default: 1500
    },
    vitamineA: {
        type: Number,
        default: 1
    },
    vitamineB1: {
        type: Number,
        default: 1.2
    },
    vitamineB2: {
        type: Number,
        default: 1.3
    },
    vitamineB3: {
        type: Number,
        default: 13
    },
    vitamineB5: {
        type: Number,
        default: 6
    },
    vitamineB6: {
        type: Number,
        default: 1.6
    },
    vitamineB7: {
        type: Number,
        default: 45
    },
    vitamineB9: {
        type: Number,
        default: 0.3
    },
    vitamineB12: {
        type: Number,
        default:0.004
    },
    vitamineC: {
        type: Number,
        default:110
    },
    vitamineD: {
        type: Number,
        default:0.02
    },
    vitamineE: {
        type: Number,
        default:14
    },
    vitamineK: {
        type: Number,
        default:0.07
    }
})

export default mongoose.models.RDA || mongoose.model('RDA', RDASchema)