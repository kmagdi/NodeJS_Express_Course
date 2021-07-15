const express=require('express')
const path=require('path')
const app=express()
//ha az index.html-t is a /public-ba tesszük az express alapértelmezetten 
//az index.html nevű fájlt fogja keresni és futtatni
app.use(express.static('../public'))

app.all('*',(req,res)=>{
    res.status(404).send('resource not found')
})

app.listen(5000,()=>{
    console.log('server is listening on port 5000...')
})
