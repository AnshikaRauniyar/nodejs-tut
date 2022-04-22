const {readFile, writeFile, write} =  require('fs')

readFile('./constants/first.txt', 'utf8', (err, result) => {
    if(err){
        console.log(err);
        return;
    }
    const first = result
    console.log(first);
    readFile('./constants/second.txt', 'utf8', (err, result) => {
        if(err){
            console.log(err);
            return;
        }
        const second = result
        console.log(second);
        writeFile('./constants/result=async.txt', `Here, we go : ${first} ${second}`, (err, result) => {
            if(err){
                console.log(err);
                return;
            }
            console.log(result)
        }
        )
    })
})