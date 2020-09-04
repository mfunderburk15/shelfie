const express = require('express')
const massive = require('massive')
const shelfCtrl = require('./controller')
require('dotenv').config()

const { SERVER_PORT, CONNECTION_STRING } = process.env

const app = express()
app.use(express.json())


app.get('/api/inventory', shelfCtrl.getInventory)
app.post('/api/product', shelfCtrl.createProduct)

massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    },
}).then(db => {
    app.set('db', db)
    console.log('db connected')
    app.listen(SERVER_PORT, () => {
        console.log(`This app is using port:${SERVER_PORT}`)
    })
})

