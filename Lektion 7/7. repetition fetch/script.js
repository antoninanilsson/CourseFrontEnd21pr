const btn=document.querySelector("#btn");
const textOutput=document.querySelector('#text-output');
const jsonBtn=document.querySelector('#btn2');
const jsonOutput=document.querySelector('#json-output');

btn.addEventListener('click',()=>{
    fetch('text.txt')
    .then(res=>res.text())
    .then(data=>{
        textOutput.innerText=data;
    })
    .catch(ett=>console.log(err));
})


const getJsonAsync=async()=>{
    try{
        const res=await fetch ('post.json');
        if (res.status!==200){
            throw new Error('errrror'),
        }
        const data=await res.json();
    }
    catch(err)
}