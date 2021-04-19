//import user from './user'   fel
// const user1=require('./user');   
// console.log(user1);

const User=require('./user');
const user1=new User('Joakim', 'Wahlström');
user1.greet();

 const name_age=require('./module');
 console.log(name_age.ages);

const {names,ages}=require('./module');
console.log(names);
console.log(ages);