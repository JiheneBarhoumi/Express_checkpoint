const express=require('express')
const app=express()

app.use(RequestDate=(req,res,next)=>{

    let date=new Date();
    console.log("the server recieved the request at this time : ",date)
    let day=date.getDay();
    console.log(day)
    let hour=date.getHours();
    console.log(hour)
    if((day>=1 && day<=5 && hour>=9 && hour<=17)===true){
        res.send("<h1>Application not available in this time , try later !</h1>")
    }
     next()
    
   })

app.listen(3000,(err)=>{
    if(err){
        console.log("server not running ! ")
    }else{
        console.log("server is running ! ")
    }
})




app.use(express.static(__dirname+'/views'))