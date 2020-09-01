import express from 'express'
import { compare } from 'bcrypt'
import {signToken} from '../helpers/jwt'
import User from '../../../models/User'
const authController = express.Router()

const login = async (req,res) => {
    try {
        const {email,password} = req.body
        // validation
        const user = await User.findOne({email})
        const match = await compare(password, user.password)
        if (!match) {
            res.status(401)
            return
        }
        const accessToken = signToken({email:user.email},{expiresIn: 60*60})
        res.cookie('accessToken',accessToken, {maxAge:900000,httpOnly:true})
        res.status(200).json({user})
    } catch (error) {
        console.log(error)
        res.status(500).json({error})
    }
}

authController.post('/',login)
export default authController