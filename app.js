const express = require('express')
const pug = require('pug')
const app = express()
const port = process.env.PORT || 8080



// Routes
app.get('/', (req,res)=>{
    let ipAdress = req.connection.remoteAddress || req.headers['x-forwarded-for']
    let obj = {
        ip_Address: ipAdress,
        software: req.headers['user-agent'].split(') ')[0].split(';')[1].trim(),
        language: req.headers["accept-language"].split(',')[0]
    }
    res.json(obj);
})

app.listen(port)