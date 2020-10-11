import User from '../helpers/user'
import {ErrorHandler} from '../helpers/error'
import { verifyToken } from '../helpers/jwt'
const assignUser = async (req,res,next) => {
    try {
        const token = req.cookies.accessToken;
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
        next()
    }
    
}
export default assignUser;