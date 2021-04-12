let scoreOne =50;
let scoreTwo=scoreOne;
console.log(scoreOne, scoreTwo);

scoreOne=100;
console.log(scoreOne, scoreTwo);

const userOne={name:'Joakim', age:34};
const userTwo=userOne;
console.log(userOne,userTwo);

userOne.name='Hans';
userOne.age=50;

console.log(userOne,userTwo);

let array=[
    {name:'Joakim', age:34},
    {name:'Jeanette', age:33},
    {name:'Hans', age:36},
    {name:'Tommy',age:38}
]


// hitta objekt i arrayen med villkor att objektets element namn==='Jeanet'
// Resultat i user är pekare mot easpektive element i arrayen (av objekt typ) . 

const user=array.find(u=>u.name==='Jeanette');
console.log(user);

console.log(array);


user.name='Nisse';
console.log(array);

