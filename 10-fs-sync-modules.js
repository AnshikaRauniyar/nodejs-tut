const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync('./constants/first.txt', 'utf8')
const second = readFileSync('./constants/second.txt', 'utf8')

console.log(first, second)

writeFileSync('./constants/result-sync.txt', `Here, we go : ${first} ${second}`, {
    flag: 'a'
})
