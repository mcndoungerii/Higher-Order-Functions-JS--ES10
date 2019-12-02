let arr = ['react', 'angular', 'vue'];

if(arr.includes('react')) {
    // console.log('Can use React');
}

//Instead of
if(arr.indexOf('react') !== -1) {
    // console.log('Can use React')
}
//OR
if(~arr.indexOf('react')) {
    // console.log('can use react')
}

//2.Exponential Operator ** is equivalent to Math.pow()

let a = 7 ** 4;
let b = 2 ** 4;

// console.log(`The value of a is ${a}`);
// console.log(`The value of b is ${b}`);

//3. Object.values/ Object .entries

//Before ES8 JavaScript developers who needed to iterate over own properties of an object had to use Object.keys, iterate over an array returned by it and use obj[key] to access each value
let obj = {a:1, b:2, c:3};
let newList = [];
Object.keys(obj).forEach(key => {
    // console.log(`Key is ${key}, Value is ${obj[key]}`)
    let newObj = {
        number: obj[key]
    }
    newList.push(newObj);
});
// console.log(newList);


//ES6 -- use for of
for(let key of Object.keys(obj)) {
    // console.log(`Key is ${key}, Value is ${obj[key]}`)
}

//Object.values()

let newArr = [];
Object.values(obj).forEach(value => {
    let newObj = {
        value: value
    }
   newArr.push(newObj);
})
// console.table(newArr);

let newArrr = [];
for(let val of Object.values(obj)) {
    let newObj = {
        values: val
    }
    newArrr.push(newObj);
}
console.log(newArrr);

