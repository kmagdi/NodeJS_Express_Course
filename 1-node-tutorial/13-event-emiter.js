const EventEmiter=require('events')
//példányosítunk ebből az objektumból:
const customEmitter=new EventEmiter()

customEmitter.on('response',(name,id)=>{
    console.log(`data received user:${name} with id:${id}`)
})
customEmitter.on('response',()=>{
    console.log('some other logic here')
})
customEmitter.emit('response','John',28)