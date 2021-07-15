const {readFileSync,writeFileSync} =require('fs')
console.log('start')
const first=readFileSync('./subfolder/content/first.txt','utf8')
const second=readFileSync('./subfolder/content/second.txt','utf8')

console.log(first,second)

writeFileSync('./subfolder/result-sync.txt',`The result:${first},${second}`,{flag:'a'})
console.log("done with this task")
console.log('starting the next one')