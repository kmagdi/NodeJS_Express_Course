console.log('stream example')
const http=require('http')
const fs=require('fs')

http.createServer((req,res)=>{
    //const text=fs.readFileSync('./subfolder/big.txt','utf8')
    //res.end(text)
    const fileStream=fs.createReadStream('./subfolder/big.txt','utf8')
    //we can access to the stream events:
    fileStream.on('open',()=>{
        //pipe method: pushing from the readStream to the writeStream
        //we can read data in chunk and we can write data in chunk
        fileStream.pipe(res)
    })
    fileStream.on('error',(err)=>{
        res.end(err)
    })
})
    .listen(5000)