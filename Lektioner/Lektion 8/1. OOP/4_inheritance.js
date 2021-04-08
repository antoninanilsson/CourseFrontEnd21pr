function Animal(name){
    this.name=name;
}

Animal.prototype.makeSound=function(){
    return `${this.name} makes ageneric sound` ;
}

function Dog(name, year) {
    Animal.call(this,name);
    this.year=year;
}
function Cat(name, year) {
    Animal.call(this,name);
    this.year=year;
}

Dog.prototype=Object.create(Animal.prototype);
Cat.prototype=Object.create(Animal.prototype);
Dog.prototype.constructor=Dog;
Cat.prototype.constructor=Cat;

Cat.prototype.spinning=function(){
    return `${this.name} spings`;
}

const dog=new Dog('Fido',4);
const cat=new Cat('Diva',2);

console.log(dog);
console.log(dog.makeSound());
console.log(cat.makeSound());
console.log(cat);


