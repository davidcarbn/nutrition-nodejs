import express from 'express'

const app = express()
const port = 3000

app.get('/test', async (req,res) => {
    res.send('tests')    
})

app.listen(port, () => console.log('running'))