const express=require('express')
const router=express.Router()

router.post('/',(req,res)=>{
    //POST esetén a body-ban érkezik az adat, nem a fejlécben, headerben mint a GET esetén)
    //console.log(req.body)
    const {name}=req.body
    if(name){
        return res.status(200).send(`Welcome ${name} !`)
    }
    res.status(401).send('Please provide credentials')
})
module.exports=router