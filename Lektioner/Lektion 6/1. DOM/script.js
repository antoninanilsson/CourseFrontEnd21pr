// console.log(window);
// console.log(document);

// let p1=document.getElementsByTagName('p');
// // console.log(p1);

// let p2=document.getElementsByClassName('paragraph');

// // console.log(p1);
// let p3=document.getElementById('para');
// // console.log(p3);

// let q1=document.querySelector('p');
// console.log(q1);

// let q2=document.querySelector('.paragraph');
// console.log(q2);

// let q3=document.querySelector('#para');
// console.log(q3);

// let q4=document.querySelector('div.paragraph');
// q4=document.querySelector('p#para');
// console.log(q4);

// let q5=document.querySelectorAll('p');
// console.log(q5);

// for (let i=0;i<q5.length;i++){console.log(q5[i]);}
// q5.forEach(node=>{console.log(node)});

// let p1 = document.getElementsByTagName('p');
// console.log(p1);
// funkar inte för HTML collection:
// p1.forEach(node => {
//   console.log(node);
// });

// console.log(q5.length);
// console.log(p1.length);
// for (let i=0;i<p1.length;i++){console.log(p1[i]);}

let list=document.querySelector('#list');
// console.log(list.parentNode);
// console.log(list.childNodes);
// console.log(list.children[0]);
 console.log(list.nextSibling);
 console.log(list.nextElementSibling);
 console.log(list.previousSibling);
 console.log(list.previousElementSibling);



