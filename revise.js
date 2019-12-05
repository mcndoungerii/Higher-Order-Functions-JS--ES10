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

const people = [
  ["Jon", 56, 900],
  ["St Patricks", 41, 780],
  ["Peace", 27, 760]
];

const resPeople = people.flatMap(([name, age, score]) => {
  return { name, age, score };
});

console.log(resPeople);
