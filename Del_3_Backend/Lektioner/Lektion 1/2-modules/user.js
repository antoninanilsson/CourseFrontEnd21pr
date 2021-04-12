// const user={
//     firstName:'Joakim',
//     lastName:'Wahlström',
//     age:34,
//     email:'jakim@mail.com'
// }
// console.log('meddelande ');
// module.exports=user;

class User {
    constructor(firstName, lastName){
        this.firstName=firstName;
        this.lastName=lastName;
    }
    greet(){
        console.log(`hello my name is  ${this.firstName} ${this.lastName}`);
    }
}
module.exports=User;