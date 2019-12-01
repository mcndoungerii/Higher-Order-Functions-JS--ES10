//Array Destructuring
const foo = ['one', 'two', 'three'];

const [red,yellow,green] = foo;
// console.log(`Red value is ${red}`);
// console.log(`Yellow value is ${yellow}`);
// console.log(`Green value is ${green}`);

//Array Destruct.. Assignment separate from declaration
let a,b;

[a,b] = [1,2];
console.table(a);
console.table(b);