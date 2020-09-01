import express from 'express'
import path from 'path'
import v1 from './apiVersions/v1/index'
import dbConnect from './services/db'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import cors from 'cors'
require('dotenv').config()

const app = express()
const port = process.env.PORT || 3000
app.use(express.static(path.join(__dirname, 'client/build')))
app.use(cors())
app.use(bodyParser())
app.use(cookieParser())

app.use('/api/v1',v1)

app.get('*',(req,res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'))
})


dbConnect().then(() => {
    app.listen(port, () => console.log('running'))  
}).catch(err => {
    console.log(err)
    process.exit()
})
