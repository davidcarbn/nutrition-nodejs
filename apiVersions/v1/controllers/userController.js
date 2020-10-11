import express from 'express'
import User from '../../../models/User'
import {hash} from 'bcrypt'
const userController = express.Router()

const createUser = async (req,res,next) => {
    try {
        const {email,password} = req.body
        if (!password || !email) throw new Error()
        const hashed = await hash(password,10)
        const user = await User.create({
            email:email,
            password:hashed,
            roles: ["user"]
        })
        res.status(201).json({user})
    } catch (error) {
        console.log(error)
        res.status(500).json({error})
    }
}

userController.post('/',createUser)
export default userController