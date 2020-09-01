import express from 'express'
const v1 = express.Router()

v1.get('/test',(req,res) => {
    res.send('test')
})

export default v1