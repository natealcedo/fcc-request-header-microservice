const express = require('express')
const pug = require('pug')
const app = express()
const port = process.env.PORT || 8080

app.enable('trust proxy')

// Routes
app.get('/', (req, res) => {
    let ipAdress = req.headers['x-forwarded-for'] || req.connection.remoteAddress
    if (ipAdress.substr(0, 7) == "::ffff:") {
        ipAdress = ipAdress.substr(7)
    }
    let obj = {
        ip_Address: ipAdress,
        software: req.headers['user-agent'].split(') ')[0].split(';')[1].trim(),
        language: req.headers["accept-language"].split(',')[0]
    }
    res.json(obj);
})

app.listen(port, function () {
    console.log('Listening on port ', port)
})