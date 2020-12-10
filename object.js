// Object
// one of the JavaScript's data types.
// a collectio of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object
// object = { key : value };의 집합체

// 1. Literals and properties
const obj1 = {}; // 'object literal' sysntax
const obj2 = new Object(); // 'object constructor' sysntax

function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const edward = {name: 'edward', age: 4};
print(edward);

// with JavaScript magic (dynamically typed language)
// can add properties later
edward.hasJob = true;
console.log(edward.hasJob);

// can delete properties later
delete edward.hasJob;
console.log(edward.hasJob);

// 2. Computed properties (계산된 properties)
// key should be always String type
console.log(edward.name);
console.log(edward['name']);
edward['hasJob'] = true;
console.log(edward.hasJob);

function printValue(obj, key) {
  console.log(obj[key]);
}

printValue(edward, 'name');
printValue(edward, 'age');

// 3. Property value shorthand
const person1 = { name: 'bob', age: 2};
const person2 = { name: 'steve', age: 3};
const person3 = { name: 'dave', age: 4};
const person4 = new Person('edward', 30);
console.log(person4);

// 4. Constructor Funtion
function Person (name, age) {
  // this = {};
  this.name = name;
  this.age = age;
  // return this;
}

// 5. in operator: property existence check (key in obj)
// 해당하는 object 안에 key가 있는지 확인
console.log('name' in edward);
console.log('age' in edward);
console.log('random' in edward);
console.log(edward.random);

// 6. for..in vs for..of
// for (key in obj)
console.clear();
for (key in edward) {
  console.log(key);
}

// for (value of iterable)
const array = [1, 2, 4, 5];
// for(let i = 0; i < array.length; i++){
// console.log(array[i]);
// }
for(value of array) {
  console.log(value);
}

// 7. Fun cloning!
// Object.assign(dest, [obj1, obj2, obj3...])
const user = {name: 'edward', age: '20'};
const user2 = user;
user2.name = 'coder';
console.log(user);

// old way
const user3 = {};
for(key in user) {
  user3[key] = user[key];
}
console.log(user3);

const user4 = Object.assign({}, user);
console.log(user4);

// another example
const fruit1 = {color: 'red'};
const fruit2 = {color: 'blue', size: 'big'};
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);

