const express = require('express')
const serverless = require('serverless-http')

const app = express()

app.use('/api/test', (req,res)=>{
    res.send("hello lambda")
})
app.use('/api/getUser', (req,res)=>{
    res.status(200).json({
        message:"success",
        data:{
            name:"Rahul Katiyar",
            contact:"8174821563",
            email:"rkatiyar@gmail.com",
            address:"Hinjwadi phase 2 Pune"
        }
    })
})
module.exports.handler = serverless(app)
