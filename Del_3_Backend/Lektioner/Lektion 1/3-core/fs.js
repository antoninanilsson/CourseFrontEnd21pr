const fs=require('fs');
const { read } = require('node:fs');
const path=require('path');

// läsa fil asynkront: 

// fs.readFile('./mapp/text.txt','utf8', (err,data)=>{
//     if (err)
//       console.log(err);
//   console.log(data);    
// })

//Skriva om
// fs.writeFile('./mapp/text.txt','ny text',()=>{
//     console.log('ändrade på texten');
// })

// fs.appendFile('./mapp/text.txt','  vi lagt till text',()=>{
//        console.log('lagt till text');
// })

// fs.writeFile('./mapp/text3.txt','  En ny fil',()=>{
//             console.log('en ny fil');
//      })

// -------------- BYTA NAMN
//  fs.rename('./mapp/text3.txt','./mapp/text2.txt',(err)=>{
//      if (err)
//         console.log(err);
//     console.log('byte namn');
// })    
//----------------- NY MAPP
// fs.mkdir('./NyMapp',err=>{
//     if (err)
//     console.log(err);
//     else 
//     console.log('skapad');
// })

// ----------------- KOLLA OM MAPP FINNS INNAN SKAPA NY ????

// if (!fs.existsSync('./NyMapp')){
//     fs.mkdir('./NyMapp',err=>{
//         if (err)
//         console.log(err);
//         else 
//         console.log('skapad');
//     });
// } else {
//     fs.rmdir()
// }
// -------------- TA BORT FILER ???
// if (fs.existsSync('./mapp/text2.txt')) {
//     fs.unlink('./mapp/text.txt',err)
// }

//--------- KOMBINERA PATH och FS
// fs.appendFile(path.join(__dirname,'mapp','text.txt'),' ny lägger vi text igen',()=>{
//     console.log('lägger text');
// })

//---------- LÄSA SKRIVA STORA FILER (BUFFRA) ?????????????????????

const readStream=fs.createReadStream('./mapp/stor.txt',{encoding:'utf8'});
const writeStream=fs.createWrite
readStream.on('data',buffer=>{
    console.log('-----------------------NY DATA-------------------------------');
    console.log(buffer);
})
