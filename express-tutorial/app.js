const express = require('express')
const app = express()
const path = require('path')
const people = require('./routes/people')
const auth = require('./routes/auth')


// console.log(path.resolve(__dirname, './methods-public'))
app.use(express.static(path.resolve(__dirname, './methods-public')))
app.use(express.urlencoded({extended: false}))

app.use(express.json())

app.use('/api/people', people)
app.use('/login', auth)


app.listen(5000, () => {
    console.log('Server listening to 5000...')
})