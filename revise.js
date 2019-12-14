const users = [
  ["John", 45],
  ["Pat", 27],
  ["Agness", 31],
  ["Paula", 23]
];

const res = Object.fromEntries(users);
Object.keys(res).forEach(key => {
  let result = {
    name: key,
    age: res[key]
  };
  //   console.log(result);
});

//OR You can use
for (let key of Object.keys(res)) {
  let resultObj = {
    name: key,
    age: res[key]
  };
  //   console.log(resultObj);
}

const people = [
  ["Jon", 56, 900],
  ["St Patricks", 41, 780],
  ["Peace", 27, 760]
];

const resPeople = people.flatMap(([name, age, score]) => {
  return { name, age, score };
});

// console.log(resPeople);

const cities = ["City 1", ["City 2"], "City 3", ["City 4"]];

// console.table(cities.flat());

const arr = ["react", "angular", "vue"];

if (arr.includes("react")) {
  //   console.log("React is available");
} else {
  throw new Error("It is Not available");
}

if (arr.indexOf("react") !== -1) {
  //   console.log("React isavailable");
}

//OR use this ~
if (~arr.indexOf("react")) {
  //   console.log("React is availableee");
}

//Object.entries()
let obj = { Tanzania: 255, Kenya: 254, Uganda: 256 };

for (let [key, value] of Object.entries(obj)) {
  let newObject = {
    name: key,
    code: value
  };
  //   console.log(newObject);
}

Object.entries(obj).forEach(([key, value]) => {
  let newOb = {
    name: key,
    codeC: value
  };
  //   console.log(newOb);
});

//Object Destructuring;
const o = { c: "James", d: 5 };
const { c, d } = o;
// console.log(c);
// console.log(d);
const { car = "Limosine", bike } = { bike: 6 };
// console.log(car);

let k, l;
({ k = "Brown", l } = { l: "Brown" });
// console.log(k);

const resu = { p: "Tanzania", q: "Kenya", r: "Uganda", t: "Rwanda" };
const { p: country, q, ...rest } = resu;
// console.log(country);

//Spread Operator

var myName = { firstName: "Allen", lastName: "Mwandunga", age: 24 };
var others = { ...myName, height: 20, weight: "70 Kg" };
// console.log(others);

//Object.fromEntries()

const userss = [
  ["Jon", 24],
  ["kate", 62],
  ["Mony", 37]
];

let newArr = [];
const xy = Object.fromEntries(userss);
// Object.keys(xy).forEach(key => {
//   let newObj = {
//     name: key,
//     age: xy[key]
//   };
//   newArr.push(newObj);
// });
// console.log(newArr);
for (let key of Object.keys(xy)) {
  let newObj = {
    name: key,
    age: xy[key]
  };
  // console.log(newObj);
}

//Instead of using Object.fromEntries then Looping then storing keys & values in the new array.
//The use of Array.flatMap

const arrFlat = userss.flatMap(([name, age]) => {
  return { name, age };
});
// console.log(arrFlat);

const city = ["Dar", ["Vatican", "Pretoria"], ["Dodoma"], "Kigoma"];
const test = city.flat();
// console.log(test);

const message = "   Hello ES10   ";
// console.log(message.trimStart());

// console.log(message.trimEnd());

//The Use of Object.entries()
Object.entries(xy).forEach(([key, value]) => {
  let newObjj = {
    name: key,
    age: value
  };
  console.log(newObjj);
});
//This is good when you have rigid Object & you want to create a newObject from it
//Is the same as using Object.keys()
