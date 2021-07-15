const http=require('http')

/*const server=http.createServer((req,res)=>{
    res.end('Welcome')
})
*/

//using event emiter API
const server=http.createServer()
//emits request event
//subscribe it / listen for it / respond to it
server.on('request',(req,res)=>{
    res.end('Welcome')
})

server.listen(5000)