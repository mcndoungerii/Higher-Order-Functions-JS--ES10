//1. Optional Catch Binding
// try {
//   // some code
//   return true;
// } catch {
//   return false;
// }

//2. Object.fromEntries()
const users = [
  ["John", 49],
  ["Frank", 25],
  ["David", 36]
];
const usersAge = Object.fromEntries(users);
// console.table(usersAge);

// 3. Array.flat()
const cities = ["City 1", ["City 2"], ["City 3", "City 4"]];
// console.table(cities.flat());

// it useful to mention that Array.flat will remove all empty slots from our array.
const numbers = [1, 2, [3, 4], , 5, 6, , [7, 8]];
// console.log(numbers.flat());

//4. Array.flatMap() --> It returns array of objects with property names you want
const userss = [
  ["John", 49, 96],
  ["Frank", 25, 388],
  ["Davis", 36, 14]
];
const usersFlattened = userss.flatMap(([name, age, followers]) => {
  return { name, age, followers };
});
// console.log(usersFlattened);

//5-6. String.trimStart() & String.trimEnd()
/* 
    String.trimStart method removes whitespace from the beginning of a string, and String.trimEnd method removes whitespace from the end of a string. Both of them have an alias, trimLeft and trimRight correspondingly.
 */

const message = "   Hello ES10   ";

// console.log(message.trimStart()); // outputs 'Hello ES10   '
// console.log(message.trimEnd()); // outputs '   Hello ES10'

//7. Dynamic Import

//let this is file: my-path/my-module.js

// export default () => console.log('Do Default');

// export const doSomething = () => console.log('Do Something');

//We are now able to import it dynamically in one of the following ways:
//1.
// import('..mypath/my-module.js').then((module) => {
//     module.default();
//     module.doSomething();
// });

// //OR
// (async () => {
//     const module = import('..my-path/my-module.js')
//     module.default();
//     module.doSomething();
// })();

//8. globalThis Object
const getGlobal = function() {
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") {
    return global;
  }
  throw new Error("unable to locate global object");
};

const global = getGlobal();

const numberss = new global.Array(1, 2, 3);
console.log(numberss);
