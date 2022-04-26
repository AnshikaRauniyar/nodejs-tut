const {readFile, writeFile } = require('fs').promises
// const util = require('util')

// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)
// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf8', (err, data)=>{
//             if(err){
//                 reject(err)
//             }
//             else {
//                 resolve(data)
//             }

//         })
//     })
// }

// getText('../constants/first.txt')
// .then((result) => console.log(result))
// .catch((err => console.log(err)))

const start = async() => {
    try{
    const first = await readFile('./constants/first.txt', 'utf8')
    const second = await readFile('./constants/second.txt', 'utf8')
    await writeFile('./constants/result-mind-grenade.txt', `This is awesome ${first} ${second}`)
    console.log(first, second)
    }
    catch(error) {
        console.log(error)
    }
}
start()