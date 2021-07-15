const {createReadStream}=require('fs')
//létrehozunk egy példányt:
const stream=createReadStream('./subfolder/big.txt',{
    highWaterMark:9000,
    encoding:'utf8'
});

//default size of buffer : 64kb
//last buffer -remainder
//highWaterMark -for control size of buffer
//const stream=createReadStream('./subfolder/big.txt',{highWaterMark:9000})
//const stream=createReadStream('./subfolder/big.txt',{encoding:'utf8'})
//we can listen to the data
stream.on('data',(result)=>{
    console.log(result)
})
stream.on('error',(err)=>{
    console.log(err)
})