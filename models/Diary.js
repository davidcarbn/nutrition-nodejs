import mongoose from 'mongoose'

const DiarySchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },

    breakfast: [{
        food: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Food'
        },
        amount: {
            type: Number
        }
    }],
    lunch: [{
        food: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Food'
        },
        amount: {
            type: Number
        }
    }],
    dinner: [{
        food: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Food'
        },
        amount: {
            type: Number
        }
    }],
    snacks: [{
        food: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Food'
        },
        amount: {
            type: Number
        }
    }],
    water: [{
        food: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Food'
        },
        amount: {
            type: Number
        }
    }]

})

export default mongoose.models.Diary || mongoose.model('Diary', DiarySchema)