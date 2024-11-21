import express from 'express';

const app = express();

app.get('/',(req,res)=>{
    res.json({
        message:"server is running"
    })
})

app.listen(7000,()=>{
    console.log("server is running")
})