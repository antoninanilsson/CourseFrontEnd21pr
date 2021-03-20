// let person = {
//     firstName:'Joakim',
//     lastName:'Wahlström'

// }
// Json object
// let json={
//     "firstName":"Joakim",
//     "lastName":"Wahlström",
//     "age":34
// }
// let json=JSON.stringify(person);
// let js=JSON.parse(json);


// console.log(person);
// console.log(json);
// console.log(js);
const user={
    firstName:'Joakim',
    lastNmae:'Wahlström',
    age:34,
    address :{
        street:'en gata',
        nr:12,
        zip:72345,
        city:'Västerås'
    },
    phone: ['1234','5678'],
    isActive:true,
}
let key='age'
console.log(user.firstName);
console.log(user[key]);
user.email='j.w.@email.com'

let {firstName:name, age,address:{city}}=user;
console.log(`Jag heter ${name} är ${age} och bor i ${city} `);
console.log(firstName:name);
console.log(city);
