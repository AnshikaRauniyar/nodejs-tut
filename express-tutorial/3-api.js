const express = require('express')
const app = express()
const {products }= require('./data')

app.get('/', (req, res) => {
    res.send(`<h1>Home Page </h1>`)
})

app.get('/api/product', (req, res)=>{
    const newProduct = products.map((product) => {
        const {id, name, image} = product
        console.log(product)
        return {id, name, image}
    })
    res.send(newProduct)
})

app.get('/api/product/:productID', (req, res) => {
    const {productID} = req.params
    const detailProduct = products.find((product) => product.id === Number(productID))
    if(!detailProduct)
        return res.status(404).send('Resource not found')

    return res.json(detailProduct)
})

app.get('/api/v1/query', (req, res) => {
    const {search, limit } = req.query
    let sortedProduct = [...products]
    if(search){
        sortedProduct = sortedProduct.filter((product) => {
            return product.name.startsWith(search)
        })
    }
    if(limit){
        sortedProduct = sortedProduct.slice(0, Number(limit))
    }
    if(! sortedProduct.length)
     return res.status(200).json({success: true, data:[]})
     res.status(200).json(sortedProduct)
})

app.listen(5000, () => {
    console.log('Server listening to 5000....')
})