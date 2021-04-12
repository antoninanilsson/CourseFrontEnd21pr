const express=require('express');
const path=require('path');
const app=express();

const PORT=process.env.PORT || 9999;

app.listen(PORT,()=>console.log('server running att http://localhost:'+PORT))


app.get('./',(req,res)=>{
    //res.send('<h1>home page<h1>');
    res.sendFile(path.join(__dirname,'views','index.html'));
})

app.get('/about',(req,res)=>{
    res.sendFile(path.join(__dirname,'views','about.html'));
})
app.get('/about-us',(req,res)=>{
    res.redirect('/about');
})

app.use((req,res)=>{
    res.sendFile(path.join(__dirname,'views','404.html'));
})