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
  console.log(result);
});
