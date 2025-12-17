const express = require('express')
const serverless = require('serverless-http')

const app = express()

app.use('/api/', (req,res)=>{
    res.send("hello lambda")
})

module.exports.handler = serverless(app)
