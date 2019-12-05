const companies = [
  { name: "Demivee", category: "jcb", start: 1994, end: 2004 },
  { name: "Janyx", category: "retail", start: 1998, end: 1985 },
  { name: "Realcube", category: "jcb", start: 2005, end: 1998 },
  { name: "Jayo", category: "switch", start: 1985, end: 2011 },
  { name: "Zoomcast", category: "jcb", start: 2000, end: 2002 },
  { name: "Tekfly", category: "laser", start: 1999, end: 2009 },
  { name: "Brainbox", category: "retail", start: 1992, end: 2006 },
  { name: "Babblestorm", category: "jcb", start: 2008, end: 2006 },
  { name: "Quamba", category: "china-unionpay", start: 1997, end: 1995 },
  { name: "Vitz", category: "jcb", start: 2000, end: 1995 },
  { name: "Yotz", category: "retail", start: 1998, end: 2007 },
  { name: "Eayo", category: "jcb", start: 1989, end: 1995 },
  {
    name: "Jetpulse",
    category: "diners-club-international",
    start: 1988,
    end: 1995
  },
  { name: "Vinder", category: "jcb", start: 2001, end: 2012 },
  { name: "Bluejam", category: "diners-club-enroute", start: 1994, end: 2006 },
  {
    name: "Brainsphere",
    category: "diners-club-international",
    start: 2011,
    end: 2006
  },
  { name: "Flipstorm", category: "visa", start: 2006, end: 1988 },
  {
    name: "Photospace",
    category: "diners-club-enroute",
    start: 1967,
    end: 1983
  }
];

const ages = [41, 32, 19, 45, 34, 25, 26, 28, 32, 45, 67, 71, 18, 19, 16, 76];

//for loop
for (let i = 0; i < companies.length; i++) {
  // console.table(companies[i]);
}

//for Each
// companies.forEach((company,index,companies) => console.table(company.name));

//FILTERING AGE 21 AND ABOVE

//filtering in old way
//1.Declare a new array
let canDrink = [];
//2.Start for loop
for (let i = 0; i < ages.length; i++) {
  //3. check for each currently iteration is greater than 21
  if (ages[i] > 21) {
    //4. push the result to the canDrink array
    canDrink.push(ages[i]);
  }
}

//Filter (ES6 way)

// const canDrink = ages.filter((age,index,ages) => age > 21?true : false);

//Filter (ES6 way)
// const canDrink = ages.filter(age => age>21);

//FILTERING RETAIL COMPANIES

const retailCompanies = companies.filter(
  company => company.category !== "retail"
);
console.table(retailCompanies);

//GET 90's Companies
const ninetyCompanies = companies.filter(
  company => company.start >= 1990 && company.start < 2000
);
// console.table(ninetyCompanies);

//GET Companies that Lasted 10 years
const lastedTenYears = companies.filter(
  company => company.end - company.start >= 10
);

//MAP

//Get companies names
const companyNames = companies.map(company => company.name);

//Get company names & their start to end years
const test = companies.map(
  company => `${company.name} [${company.start} - ${company.end}]`
);

//Get a new Array of Squared ages

const newAges = ages.map(age => Math.sqrt(age));

const ageMap = ages.map(age => Math.sqrt(age)).map(age => age * 2);

//SORT
//Sort by the Start Date

const sortedCompanies = companies.sort((c1, c2) =>
  c1.start > c2.start ? 1 : -1
);

//Sort by ages in ASC
const sortedAges = ages.sort((a, b) => a - b);

//Sort by ages in DESC
const sortedAgesDESC = ages.sort((a, b) => b - a);

//REDUCE

let ageSum = 0;
for (let i = 0; i < ages.length; i++) {
  ageSum += ages[i];
}

//Using REDUCE to get sum of ages
const ageSumWithReduce = ages.reduce((total, age) => total + age, 0);

//Using REDUCE to get sum of Range years of a company
const rangeYearSum = companies.reduce(
  (total, company) => total + (company.end - company.start),
  0
);

//Combined functions for ages

const combined = ages
  .map(age => age * 2)
  .filter(age => age >= 40)
  .sort((a, b) => a - b)
  .reduce((a, b) => a + b, 0);

console.table(`The Combined Ages value is ${combined}`);
