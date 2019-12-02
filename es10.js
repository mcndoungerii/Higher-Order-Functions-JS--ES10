//1. Optional Catch Binding
// try {
//   // some code
//   return true;
// } catch {
//   return false;
// }

//2. Object.fromEntries()
const users = [['John', 49], ['Frank', 25], ['David', 36]];
const usersAge = Object.fromEntries(users);
// console.table(usersAge);

// 3. Array.flat()
const cities = ['City 1', ['City 2'], ['City 3', 'City 4']];
// console.table(cities.flat());

// it useful to mention that Array.flat will remove all empty slots from our array.
const numbers = [1, 2, [3, 4],, 5, 6,, [7,8]];
// console.log(numbers.flat());

//4. Array.flatMap() --> It returns array of objects with property names you want
const userss = [['John', 49, 96], ['Frank', 25, 388], ['Davis',36, 14]];
const usersFlattened = userss.flatMap(([name,age,followers]) => {
    return {name,age,followers};
})
console.log(usersFlattened);