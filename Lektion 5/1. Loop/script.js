const nameArray =['Joakim','Hans','Jeanette', 'Jack','John','Liam', 'Willy'];
const userArray =[
    {name:'Joakim',email:'joakim@mail.com', age:34,status:true},
    {name:'Hans',email:'hans@mail.com', age:36,status:false},
    {name:'Jeanette',email:'jeanette@mail.com', age:34,status:false},
    {name:'Jack',email:'jack@mail.com', age:24,status:false},
    {name:'John',email:'john@mail.com', age:42,status:false},
    {name:'Liam',email:'liam@mail.com', age:15,status:true},
    {name:'Willy',email:'willy@mail.com', age:23,status:false},
    
];
// for (let i=0; i<5;i++){
//     console.log(i);
//     console.log(nameArray[i]);

// }

// for (let i=0; i<nameArray.length;i++){
//     console.log(i);
//     console.log(nameArray[i]);
// }
// for (let name of nameArray) {
//     console.log(name);
// }
// for (user of userArray){
//     console.log(user);
// }

// let i=1;

// // while (i<5) {
// //     console.log('while '+i);
// //     i++;
// // }

// do {
//     console.log(i);
//     i++;
// } while (i<7);

// nameArray.forEach(function (name){
//     console.log(name);
// })
// nameArray.forEach(name=>{
//     console.log(name);
// })
// let numberOfUsers=0;
// userArray.forEach(user=>{
//     console.log(user.name, user.age);
//     numberOfUsers++;
// })

// const userEmail =userArray.map(user=>{
//     return user.email;
// })
// console.log(userEmail);

// const userEmail =userArray.map(user=>{
//     return user;
// })

const loggedIn= userArray.filter(user=>{
    return user.status===true;
})
console.log(loggedIn);
