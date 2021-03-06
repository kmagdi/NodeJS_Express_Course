const express=require('express')
const path=require('path')
const app=express()
//all my static files I transfer in /public folder:
//setup static and middelware
app.use(express.static('../public'))//all resources will be available
app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'))
})
app.all('*',(req,res)=>{
    res.status(404).send('resource not found')
})

app.listen(5000,()=>{
    console.log('server is listening on port 5000...')
})
