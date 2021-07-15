const http=require('http')

const server=http.createServer((req,res)=>{
    if(req.url==='/')
        res.end('Welcome to the home page')
    if(req.url==='/about')
        res.end('This is our short history')
    res.end(
        `<h1>Oops</h1>
        <p>The page doesen't exitst!</p>
        <a href='/'>go back to the home page </a>`
    )
})

server.listen(5000)