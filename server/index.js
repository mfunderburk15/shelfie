const express = require('express')
const massive = require('massive')
const shelfCtrl = require('./controller')
require('dotenv').config()

const { SERVER_PORT, CONNECTION_STRING } = process.env

const app = express()
app.use(express.json())


app.get('/api/inventory', shelfCtrl.getInventory)
app.get('/api/product/:id', shelfCtrl.getProductById)
app.post('/api/product', shelfCtrl.createProduct)
app.delete('/api/product/:id', shelfCtrl.deleteProduct)
app.put('/api/product/:id', shelfCtrl.editProduct)

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

