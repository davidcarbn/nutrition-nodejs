import User from '../helpers/user'
import {ErrorHandler} from '../helpers/error'
import { verifyToken } from '../helpers/jwt'
const assignUser = async (req,res,next) => {
    const token = req.cookies.accessToken;
    try {
        
        if (!token) {
            const user = new User(-1, ["guest"])
            req.user = user
        } else {
            const decoded = await verifyToken(token,{
                algorithms:['HS256']
            })
            const user = new User(decoded.id,decoded.roles)
            req.user = user
        }
        next()
    } catch (error) {
        const user = new User(-1, ["guest"])
        req.user = user
        res.cookie('accessToken',token, {
            maxAge:0,
            httpOnly: true,
            secure:  process.env.DEV ? false : true,
        })
        res.cookie('logged',token, {
            maxAge:0,
            httpOnly: false,
            secure:  process.env.DEV ? false : true,
        })
        next()
    }
    
}
export default assignUser;