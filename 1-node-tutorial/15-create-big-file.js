//first we create a big file:
const {writeFileSync}=require('fs')
for(let i=0;i<10000;i++){
    writeFileSync('./subfolder/big.txt',`Hello ${i}\n `,{flag:'a'})
}