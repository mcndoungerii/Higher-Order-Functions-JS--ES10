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

// console.log(userId(user));
// console.log(whoIs(user));

// Setting a function parameter's default value
function drawChart({size = 'big', coords = {x:0, y:0}, radius = 25} = {}) {
    // console.log(size, coords, radius);
    
}

drawChart({
    coords: {x: 18, y: 30},
    radius: 30
});

//Nested object and array destructuring

const metadata = {
    title: 'Scratchpad',
    translations: [
        {
            locale: 'de',
            localization_tags:[],
            last_edit: '2014-04-14T08:43:37',
            url: '/de/docs/Tools/Scratchpad',
            title: 'JavaScript-Umgebung'
        }
    ],
    url: '/en-US/docs/Tools/Scratchpad'
};

let {
    title: englishTitle,
    translations: [ 
        {
            title: localeTitle,
        },
        
    ],
} = metadata;

// console.log(englishTitle);
// console.log(localeTitle);

//Nested object and array destructuring
const people = [
  {
    name: 'Mike Smith',
    family: {
      mother: 'Jane Smith',
      father: 'Harry Smith',
      sister: 'Samantha Smith'
    },
    age: 35
  },
  {
    name: 'Tom Jones',
    family: {
      mother: 'Norah Jones',
      father: 'Richard Jones',
      brother: 'Howard Jones'
    },
    age: 25
  }
];

for(const {name: n, family: {father: f}} of people) {
    // console.table(`Name: ${n}, Father: ${f}`)
}

//Computed object property names and destructuring
let key = 'z';
let {[key]: foof} = {z: 'bar'};

console.log(foof);