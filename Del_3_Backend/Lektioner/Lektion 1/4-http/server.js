
//------------------?????????????????????
const http=require('http');

const server = http.createServer((req,res)=>{
    // console.log('request made');
    //res.write('<h1>HELLO<h1>');
    res.end('<h1>HELLO<h1>');
})

server.listen(9999,()=>console.log('Server running at http://localhost:9999'));