class Animal{
    constructor(name){
        this.name=name
    }
    makeSound(){
        return `${this.name} makes a generic sound!`
    }
}

class Dog extends Animal{
    constructor(name,year){
        super(name)
        this.year=year
    }
}

class Cat extends Animal{
    constructor(name,year){
        super(name)
        this.year=year
    }
    spinning(){
        return `${this.name} spings!` + super.makeSound();
    }
}

const dog=new Dog('Fido',4);
const cat=new Cat('Diva',4);
console.log(dog.makeSound());
console.log(cat);
console.log(cat.makeSound());
console.log(cat.spinning());

class User {
    constructor(name,email){
        this.name=name;
        this.email=email;
    }

}

class Admin extends User{
    manageUsers(){
        return `Managed users`;
    }
}
const joakim=new Admin('Joakim','joakim@mail.com');
console.log(joakim);
