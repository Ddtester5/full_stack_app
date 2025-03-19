import express from 'express'

const app = express()

app.get('/',(req,res)=>{res.send('hi')})

app.listen(3000,()=>{
    console.warn('Listening on http://localhost:3000')
})