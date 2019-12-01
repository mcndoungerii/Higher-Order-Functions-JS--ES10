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
const obj = {r: 42, s: true};
const {r: foo, s: bar} = obj;

// console.log(foo);
// console.log(bar);

//4.Default value

const{car=5, bike=6} = {car: 1};
// console.table(car);
// console.log(bike);

//5.Assigning to new variables names and providing default values
const{d: dd=10, f: ff=10} = {d:13};
// console.log(dd);
// console.log(ff);

//Unpacking fields from objects passed as function parameter

const user = {
  id: 42,
  displayName: 'jdoe',
  fullName: {
        firstName: 'Joao',
        lastName: 'Felix'
    }
};

function userId({id}) {
    return id;
}

function whoIs({displayName, fullName:{lastName: name}}) {
    return `${displayName} is ${name}`;
}

console.log(userId(user));
console.log(whoIs(user));