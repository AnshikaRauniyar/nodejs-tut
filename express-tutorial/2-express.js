const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(path.resolve(__dirname, './public')))

// app.get('/', (req, res) => {
//     res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
// })

app.all('*', (req, res) =>{
res.status(404).send(`Not found`)
})

app.listen(5000, () => {
    console.log(`Server listening to port 5000...`)
})