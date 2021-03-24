const div1=document.querySelector('#div1');
const div2=document.querySelector('#div2');
const btn=document.querySelector('#btn');

const changeText =()=>{
    div1.innerText="Hej";
}
//changeText();



 //console.log(div2.id);

// 

btn.addEventListener('click', ()=>{
    div2.style.backgroundColor='#cecece';
    document.body.style.backgroundColor='#333';
div2.innerHTML = `
    <ul>
        <li>asd</li>
        <li>asasdd</li>
        <li>ash465d</li>
    </ul> `

changeText(); 
console.log(div2.innerHTML);
 })
