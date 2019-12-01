//Object destructuring


//1.Basic assignment
const o = {p: 42, q: true};
const {p,q} = o;

// console.log(p);
// console.log(q);

//2.Assignment without declaration
let a,b;
({a,b} = {a: 1, b: 2}); // same as const {a,b} = {a:1, b:2}
// console.log(a);
// console.log(b);

//3. Assigning to new variable names
const o = {r: 42, s: true};
const {r: foo, s: bar} = 0;

console.log(r);
console.log(s);