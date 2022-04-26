const express = require('express')
const res = require('express/lib/response')
const app = express()
const morgan = require('morgan')
const logger = require('./logger')
const authorize = require('./authorize')

//app.use([authorize, logger])
app.use(morgan('tiny'))
app.get('/', (req, res) => {
    // const method = req.method
    // const url = req.url
    res.send(`Home`)
})

app.get('/about', (req, res) => {
    res.send(`About`)
})

app.get('/api/product', (req, res) => {
    res.send(`Product`)
})

app.get('/api/item', (req, res) => {
    console.log(req.user)
    res.send(`Item`)
})

app.all('*', (req, res) => {
    res.send(`Not found`)
})
app.listen(5000, () => {
    console.log(`Server listening to port 5000....`)
})