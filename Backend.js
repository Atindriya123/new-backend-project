require('dotenv').config()

const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res) =>{
    res.send ('atindotcom')
})

app.get("/login",(req,res)=>{
    res.send("<h1>plese login at Atin code Adda</h1>")
})

//app.get("/youtube",())

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})