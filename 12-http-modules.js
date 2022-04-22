const http = require('http')

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.end('Welcome to the Home page!')
    }
    else if(req.url === '/about'){
        res.end('About Page')
    }
    else {
    res.end(`
    <h1>Oops !</h1>
    <p>
    We couldn't find page you were looking for. </p>
    <a href = "/" >Back home </a>
    `)
    }
}).listen(5000)