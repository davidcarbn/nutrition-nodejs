import jwt from 'jsonwebtoken'

export const signToken = (payload,options) => {
    return new Promise((resolve,reject) => {
        jwt.sign(payload,process.env.JWT_SECRET, options, (err,token) => {
            if (err) {
                reject(err)
                return
            }
            resolve(token)
        })
    })
}