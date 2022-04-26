const eventEmitter = require('events')

const customEmitter = new eventEmitter()

customEmitter.on('response', (name, id) => {
    console.log(`Data received with ${name} & id: ${id}`)
})
customEmitter.on('response', () => {
    console.log('Data received')
})


customEmitter.emit('response', 'john', 34)