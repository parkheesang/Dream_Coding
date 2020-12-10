// Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

// 1. Function declaration
// function name (param1, param2) {body... return}
// one function === one thing
// naming: doSomething, command, verb
// e.g. createCardAndPoint -> createcard, createPoint
// function is object in JS
function printHello() {
  console.log('Hello');
}
printHello();

function log(message) {
  console.log(message);
}
log('hello@');
log(1234);

// 2. Parameters
// primitive parameters: passed by value
// object parameters: passed by reference (메모리에 reference가 저장)
function changeName(obj) {
  obj.name = 'coder'; // 전달된 이름을 무조건 coder로 변경하는 함수
}
const edward = {name: 'edward'};
changeName(edward);
console.log(edward);

// 3. Default parameters (added in ES6)
function showMessage (message, from = 'unknown') {
  console.log(`${message} by ${from}`);
}
showMessage('Hi');

// 4. Rest parameters (added in ES6)
function priintAll(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }

  for (const arg of args) { // for of를 이용해 간단하게 출력가능
    console.log(arg);
  }

  args.forEach((arg) => console.log(arg));
}
priintAll('dream', 'coding', 'edward');

// 5. Local scope
let globalMessage = 'global'; // global variable
function printMessage() {
  let message = 'hello';
  console.log(message); // local variable
  console.log(globalMessage);
  function printAnother() {
    console.log(message);
    let childMessage = 'hello';
  }
  // colsole.log(childMessage): //error
}
printMessage();

// 6. Return a value1
function sum(a, b){
  return a + b;
}
const result = sum(1,2);//3
console.log(`sum :${sum(1 ,2)}`);

// 7. Early return, early exit
// bad
function upgreaderUser(user) {
  if (user.point > 10) {
   //long upgrade logic...
  }
}

// good(조건이 맞지 않는경우, 값이 undefined인 경우, 값이 -인 경우)
function upgradeUser(user) {
  if (user.point <= 10) {
    return; // 빨리 리턴해서 함수 종료
  }
  // 조건이 맞을 때만 필요한 로직 실행
  // long upgrade logic...
}
//---------------------------------------
// First-class function
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other fuctions.
// can be returned by another function

// 1. Function expression
// a function declaration can be called earlier than it is defiend. (hoisted)
// a function expression isn created when the execution reaches it.
const print = function () { // anonymous function
  console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
  if (answer === 'love you') {
    printYes();
  } else {
    printNo();
  }
}
// anonymous function
const printYes = function() {
  console.log('yes!');
};
// named function
// better debugging in debugger's stack traces
// recursions(재귀)
const printNo = function print() {
  console.log('No!');
};
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arroww function
// always anonymous
// It makes function shotly.

// const simplePrint = function (){
//   console.log('simplePrint!')
// };

const simplePrint = () => console.log('simplePrint!!');
const add = (a, b) => a + b;
const simpleMultiply = (a, b) => {
  // do something more
  return a * b;
};

// IIFE: Immediately Invoked Function Expression
(function hello() {
  console.log('IIFE');
})();

// Fun quiz time
// function calculater(command, a, b)
// command: (add, substract, divide, multiply, remainder)

const calculate = (command, a, b) => {
  switch (command) {
    case "add":
      return a + b;
      
    case 'substract':
      return a - b;  

    case 'divide':
      return a / b;

    case 'multiply':
      return a * b;

    case 'remainder':
      return a % b;    

    default:
      throw Error('Unkown command');
      const re_enter = "add, substract, divide, multiply, remainder 중에서 입력하세요";
      return re_enter;
  }
}
const result2 = calculate('add', 9, 3);
console.log(`result: ${result2}`);