const {readFile, writeFile}=require('fs').promises

const start=async()=>{
    try {
        const first=await readFile('../subfolder/content/first.txt','utf8')
        const second=await readFile('../subfolder/content/second.txt','utf8')
        console.log(first,second)
        await writeFile('../subfolder/content/result.txt',`This is awsome:${first} ${second} flag:${'a'}`)
    } catch (error) {
        console.log(error)
    }
}

start()
