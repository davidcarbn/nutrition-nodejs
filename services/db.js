import mongoose from 'mongoose'

const dbConnect = () => {
    return new Promise((resolve,reject) => {
        mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).then(() => {
            mongoose.connection
                .once('open', () =>console.log('DB Connection opened'))
                .on('error', () => console.log('DB Connection Error'))
            console.log('MONGODB Connection established')
            resolve()
        }).catch((err) => {
            reject(err)
        })
    })
}
export default dbConnect