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
  console.log(newOb);
});
