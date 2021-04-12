const names=['Hans', 'John','Lena','Anna','Max'];
console.log(names);
names.pop();
console.log(names);
names[1]='Micki';
console.log(names);

names.push('Joakim');
console.log(names);

names.sort();
console.log(names);

console.log(names.indexOf('Joakim'));

names.splice(names.indexOf('Joakim'),1);
console.log(names);

names.forEach(name=>{console.log(name)});
