const express = require('express')
const shelfCtrl = require('./controller')

const app = express()

const SERVER_PORT = 3000;

app.listen(SERVER_PORT, () => {
    console.log(`This app is using port:${SERVER_PORT}`)
})