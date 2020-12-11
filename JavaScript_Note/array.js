'use strict';

// Array🎉

//  1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ['🍎', '🍌'];
console.log(fruits);;
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length - 1]); //last index

// 3. Looping over an array
// print all fruits
// a. for
console.clear();
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// b. for of
for(let fruit of fruits) {
  console.log(fruit);
}

// c. forEach는 배열 안에 들어있는 value들 마다 내가 전달한 함수를 출력한다.
fruits.forEach((fruit, index) => {console.log(fruit, index)});

// 4. Additon, deletion, copy
// push: add an item to the end
fruits.push('🍓', '🍑');
console.log(fruits);

// pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: add an item to the beginning
fruits.unshift('🍓', '🍋');
console.log(fruits);

// shift: remove an item from the beginning
fruits.shift();
fruits.shift();
console.log(fruits);

// note!! shift, unshift are much slower then pop, push.
// splice: remove an item by index position 꼬아서 이어주다
fruits.push('🍓', '🍑', '🍋');
console.log(fruits);
fruits.splice(1, 1); 
console.log(fruits);
fruits.splice(1, 1, '🍏', '🍉'); 
console.log(fruits);

// concat: Combines two or more arrays.
const fruits2 = ['🍐', '🥝'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
// indexOf: find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('🍎'));
console.log(fruits.indexOf('🍉'));
console.log(fruits.indexOf('🍒'));

// includes
console.log(fruits.includes('🍉'));
console.log(fruits.includes('🍒'));


// lastIndexOf
console.clear();
fruits.push('🍎');
console.log(fruits);
console.log(fruits.indexOf('🍎'));
console.log(fruits.lastIndexOf('🍎'));

