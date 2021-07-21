const express=require('express')
const router=express.Router()
const {people}=require('../data')
router.get('/',(req,res)=>{
    res.status(200).json({success:true,data:people})
})
router.post('/',(req,res)=>{
    const {name}=req.body
    if(!name){
        return res.status(400).json({success:false, msg:'please provide name value'})
    }
    res.status(201).send({success:true,person:name})
})
router.put('/:id',(req,res)=>{
    const {id}=req.params
    const {name}=req.body
    const person=people.find(pers=>pers.id===Number(id))
    if(!person){
        res.status(404).json({success:false, msg:`no person with id: ${id}`})
    }
    const newPeople=people.map(pers=>{
        if(pers.id===Number(id))
            pers.name=name
        return pers
    })
    res.status(200).json({success:true, data:newPeople})
})
router.delete('/:id',(req,res)=>{
    const {id}=req.params
    const {name}=req.body
    const person=people.filter(person=>person.id===Number(id))
    if(!person)
        res.status(404).json({success:false, msg:`no person with id: ${id}`})
    const newPeople=people.filter(person=>person.id!=Number(id))
    res.status(200).json({success:true, data:newPeople})
})
module.exports=router