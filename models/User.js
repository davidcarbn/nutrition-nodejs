import mongoose from 'mongoose'
import RDA from './RDA'

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    roles: [{
        type: String,
        enum: ["user","admin"]
    }],
    createdAt: {
        type: Date,
        default: Date.now
    }
})
UserSchema.post('save',(doc) => {
    console.log(doc)
    RDA.create({user: doc._id})
})

export default mongoose.models.User || mongoose.model('User',UserSchema)