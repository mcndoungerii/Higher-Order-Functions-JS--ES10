//Array Destructuring
const foo = ['one', 'two', 'three'];

const [red,yellow,green] = foo;
// console.log(`Red value is ${red}`);
// console.log(`Yellow value is ${yellow}`);
// console.log(`Green value is ${green}`);

//Array Destruct.. Assignment separate from declaration
let a,b;

[a,b] = [1,2];
// console.table(a);
// console.table(b);

// Default values -- A variable can be assigned a default, in the case that the value unpacked from the array is undefined.
let c,d;

[c=1, d=7] = [1];

// console.log(`The value of c is: ${c}`);
// console.log(`The value of d is: ${d}`);


//Swapping variables
let e = 1;
let f = 3;

[e,f] = [f,e];

// console.log(`The value of e is: ${e}`);
// console.log(`The value of f is: ${f}`);

const arr = [1,2,3,4,5];
[arr[2], arr[1]] = [arr[1], arr[2]];
//console.log(arr);  arr[2] = 3 === 2, arr[1] = 2 === 3; arr = [1,3,2]

// Parsing an array returned from a function
function fk() {
    return [1,2];
}

let g,h;
[g,h] = fk();
console.log(g);
console.log(h);
