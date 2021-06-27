const {readFile,writeFile}=require('fs')
console.log('start')
readFile('./subfolder/content/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    const first=result
    readFile('./subfolder/content/second.txt','utf8',(err,result)=>{
        if(err){
            console.log(err)
            return
        }
        const second=result
        writeFile('./subfolder/content/result-async.txt',`Here is the result: ${first}, ${second}`,
            (err,result)=>{
                if(err){
                    console.log(err)
                    return
                }
                console.log('done width this task')
            })
    })
})
console.log('starting next task')