import express from 'express';
import {BACKEND_URL} from '@repo/common/url'
const app = express();

console.log(BACKEND_URL)

app.get('/',(req,res)=>{
    res.json({
        message:"server is running"
    })
})

app.listen(7000,()=>{
    console.log("server is running")
})