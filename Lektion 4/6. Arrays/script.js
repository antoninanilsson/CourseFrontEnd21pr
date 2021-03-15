// const multiArray=['12',12,true]

const array=[0,1,2,3,4,5,6];
const users=[
    {firstName:'Joakim', lastName:'Wahlström', age:34},
    {firstName:'Joakim', lastName:'Wahlström', age:34},
    {firstName:'Joakim', lastName:'Wahlström', age:34}
];
const names =['hans','max','lilli'];
console.log(names);
console.log(names.length);

console.log(names.indexOf('max'));
names.unshift('Colin');
console.log(names);
names.shift();
console.log(names);
names.push('Joe');
console.log(names);
names.pop();
console.log(names);
names[names.indexOf('max')]='jack';
console.log(names);
// names=['nam1','nam2'];
delete names[1];
names.splice(1,1);
console.log(names);
names.splice(1,0,'Janette', 'Colin');
console.log(names);
names.splice(1,2, 'hans');
console.log(names);

names.splice(names.indexOf('hans'),1,'janette');
console.log(names);
console.log(names.concat(['Hans','Tommy']));
// names=names.concat(['Hans','Tommy']);
names.sort();
console.log(names);
names.reverse();
console.log(names);
names.sort().reverse();
console.log(36**4);
