const path=require('path')

console.log(path.sep)

const filePath=path.join('subfolder','content','test.js')
console.log(filePath)

const base=path.basename(filePath)
console.log(base)

const absolute=path.resolve(__dirname,'subfolder','content','test.js')
console.log(absolute)
console.log(__dirname)