const user={
    firstName:'Joakim',
    lastName:'Wahlström',
    age:34,
    email:'jakim@mail.com'
}
console.log('meddelande ');

class User {
    constructor(firstName, lastName){
        this.firstName=firstName;
        this.lastName=lastName;
    }
    greet(){
        console.log('hello'+this.firstName+this.lastName);
    }
}
module.export(User);