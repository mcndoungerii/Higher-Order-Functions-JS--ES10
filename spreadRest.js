//Rest Parameter [ …rest]
//It is a collection of all remaining elements (hence, the name rest, as in “the rest of the elements”) into an array.

var myName = ["Marina","Magdy","shafiq"];
const [firstName,...familyName] = myName;
// console.log(firstName);
// console.log(familyName); // ["Magdy","Shafiq"]

function myData(...args) {
    // console.log(args);
}
myData("Marina","Magdy","Shafiq");

//Spread Operator […spread]

var myName = ["Marina","Magdy"];
var newArr = ["Front End",...myName,24];

console.log(newArr);