const express = require('express')
const app = express()
const cors = require('cors')
const course = require('./data/course.json')
const port = process.env.PORT || 7000
app.use(cors())
app.get('/',(req,res)=>{
    res.send('hello word this is the main')
})

app.get('/courses',(req,res)=>{
    res.send(course)
})
  
app.get('/courses/:id',(req,res)=>{
    const id = req.params.id
    const one = course.find(n=>n.id === id)
    res.send(one)
})
app.listen(port, ()=>{
    console.log('connected to server')
})