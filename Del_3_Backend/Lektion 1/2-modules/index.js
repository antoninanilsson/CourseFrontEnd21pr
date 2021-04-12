//import user from './user'   fel
// const user1=require('./user');   
// console.log(user1);

const User=require('./user');
const user1=new User('Joakim', 'Wahlström');
usrer1.greet();

// const names=require('./module');
// console.log(names);

const {names}=require('./module');
console.log(names);