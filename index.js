import express from 'express'
import path from 'path'
import v1 from './apiVersions/v1/index'
const app = express()
const port = process.env.PORT || 3000
app.use(express.static(path.join(__dirname, 'client/build')))


app.use('/api/v1',v1)

app.get('*',(req,res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'))
})
app.listen(port, () => console.log('running'))