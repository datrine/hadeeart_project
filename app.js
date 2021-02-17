const express=require("express")
const app=express()

app.get("/",(req,res,next)=>{
res.send("<p>Running as expected...</p>")
})

app.listen(()=>{
    console.log("Listening...")
})