const {readFile}=require('fs')

const getText=(path)=>{
    return new Promise((resolve,reject)=>{
        readFile(path,'utf8',(err,data)=>{
            if(err)
                reject(err)
            else
                resolve(data)
        })
    })
}
const start=async()=>{
    try {
        const first=await getText('../subfolder/content/first.txt')
        const second=await getText('../subfolder/content/second.txt')
        console.log(first,second)
    } catch (error) {
        console.log(error)
    }
}

start()

//hívjuk meg a függvényt:
/*getText('../subfolder/content/first.txt')
    .then((result)=>console.log(result))
    .catch((err)=>console.log(err))
    */