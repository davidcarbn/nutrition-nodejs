import express from 'express'
import { compare } from 'bcrypt'
import {signToken} from '../helpers/jwt'
import User from '../../../models/User'
import cors from 'cors'
const authController = express.Router()

const checkStatus = async (req,res) => {
    console.log(req.cookies)
    if (req.user.id === -1) {
        return res.status(401).json({user: req.user})
    }
    return res.status(200).json({user: req.user})
}

const login = async (req,res) => {
    try {
        const {email,password} = req.body
        console.log(req.body    )
        // validation
        const user = await User.findOne({email:email})
        console.log(user)
        const match = await compare(password, user.password)
        if (!match) {
            res.status(401)
            return
        }
        const accessToken = await signToken({id:user.id, roles: user.roles},{expiresIn: 60*60*24*1000})
        console.log(accessToken)
        res.cookie('accessToken',accessToken, {
            maxAge:60*60*24*1000,
            httpOnly: true,
            secure:  process.env.DEV ? false : true,
        })
        res.status(200).json({user})
    } catch (error) {
        console.log(error)
        res.status(500).json({error})
    }
}
authController.get('/',checkStatus)
authController.post('/',login)
export default authController