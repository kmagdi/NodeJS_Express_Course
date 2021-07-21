const authorize=(req,res,next)=>{
    console.log(req.query)
const {user}=req.query
if(user==='gyula'){
    req.user={name:'gyula',id:3}
     next()
}else{
    res.status(401).send('Unauthorized')
}
   
}

module.exports=authorize