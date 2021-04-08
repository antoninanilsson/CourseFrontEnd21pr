// let age=34;
// if(true){
//     let name='Joakim';
//     console.log(name);

// }
// console.log(name);

// let firstName='Joakim';

// const greet =function(name){
//     console.log(`Hej ${name} Hur läget?`);
// }
// greet(firstName);

// const func1=function(firstName, lastName){
//     let _fullName=`${firstName} ${lastName}`;
//     console.log(_fullName);
// }
// func1('Jakim','Wahlström');

// const calc =function(num1=0,num2=10){
//     let _sum=num1+num2;
//     return _sum;
// }
// let nummer=calc();
// // console.log(nummer);
// const greet=(name)=>name + ' 1';


// console.log(greet('test'));

// let name=['Hans', 'janne'];

// name.forEach(pers => {console.log(pers) });

// const func2=(nr1,nr2,cb)=>{
//     let sum=nr1+nr2;
//     setTimeout(()=>{})
// }

// let myName = name[0];
// console.log(myName);
// let upper=myName.toUpperCase();
// console.log(upper);

// let user 

// Deklarera en funktion
// function hej() {
//   console.log('hej på dig');
// }

// const greet = function() {
//   console.log('hur är lääget');
// }

// // Köra en funktion
// hej();
// greet();

// let firstName = 'Joakim';


// const greet = function(name) {

//   // console.log(`Hej ${firstName} hur är läget?`)
//   console.log(`Hej ${name} hur är läget?`);
// }

// greet(firstName);
// greet('Hans');
// greet('Nisse')

// const func1 = function(firstName, lastName) {
//     let _fullName = `${firstName} ${lastName}`;
//     console.log(_fullName);
//   }
  
//   func1('Joakim', 'Wahlström');

//   const calc = function(num1 = 0, num2 = 10) {
//   let sum = num1 + num2
//   return sum
// }

// let nummer = calc(5, 10);
// console.log(nummer);

// console.log(calc(200, 500))

// console.log(calc());

// ARROW FUNCTIONS

// const greet = (name) => {
//   return `Hej ${name} hur är läget?`;
// }


//  const greet = name => `Hej ${name} hur är läget?`;
//  console.log(greet('Joakim'));


// const calc = (num1 = 0, num2 = 0) => num1 + num2;
// let sum=calc(5,10);
// console.log(sum);


// CALLBACK FUNCTIONS

let names = ['Joakim', 'Hans', 'Jeanette'];

// names.forEach(name => {
//   console.log(name)
// })

// const minFunktion = (callback) => {
//   let value = 25;
//   callback(value);
// }


// minFunktion(val => {
//   console.log(val);
// })


// const func2 = (nr1, nr2, cb) => {
//   let sum = nr1 + nr2;
//   setTimeout(() => {
//     cb(sum);
//   },2000)
// }

// func2(10, 20, summa => {
//   console.log(summa);
// })


// METHODS

// let myName = names[0];
// // console.log(myName);

// let upper = myName.toUpperCase();
// // console.log(upper);

let user = {
  firstName: 'Joakim',
  lastName: 'Wahlström',
  fullName() {
    return this.firstName + ' ' + this.lastName;
    // console.log(this);
  }
}
// user.fullName();
console.log(user.fullName())

let fullName = user.fullName();
console.log(fullName);