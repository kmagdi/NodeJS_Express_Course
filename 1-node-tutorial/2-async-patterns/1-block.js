const http=require('http')

const server=http.createServer((req,res)=>{
    //we will check all URL-s
    if(req.url==='/'){
        res.end('Home Page v')
    }
    if(req.url==='/about'){
        //if we have here some BLOCKING CODE:
        for(let i=0;i<1000;i++){
            for(let j=0;j<1000;j++){
                console.log(`${i} - ${j}`)
            }
        }
        res.end('About page')
    }
    res.end('Error Page')

})

server.listen(5000,()=>{
    console.log('server listening on port 5000... ')
})