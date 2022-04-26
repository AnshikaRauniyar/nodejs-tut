const {writeFileSync} = require('fs')
for( let i = 0; i<10000;i++){
    writeFileSync('./constants/bigfile.txt', ` Hi ${i}`, {
        flag: 'a'
    })
}