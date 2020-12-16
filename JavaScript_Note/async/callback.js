'use strick';

// JavaScript is synchronous.(동기적)
// Execute the code block in order after hoisting.
// hoisting: var, function declaration 선언들이 자동적으로 제일 위로 올라간다.
console.log('1');
setTimeout(() =>console.log('2'), 1000);
console.log('3');

// Synchronous callback
function printImmediately(print) {
  print();
}

printImmediately(() => console.log('see you at the work'));

// Asysnchronous callback
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}
printWithDelay(() => console.log('async callback'), 2000);


// CallBack Hell example
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if(
        (id === 'edward' && password === 'dream') ||
        (id === 'coder' && password === 'academy')
      ) {
        onSuccess(id);
      } else {
        onError(new Error('not found'));
      }
    }, 2000);
  }
  
  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === 'edward') {
        onSuccess ({name: 'edward', role: 'admin'});
      }else {
        onError(new Error('no access'));
      }
    }, 1000);
  }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt ('enter your password');
userStorage.loginUser(
  id,
  password,
  user => {
    userStorage.getRoles(
      user,
      userWithRole => {
        alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} admin`);
      },
      error => {
        console.log(error);
      }
    );
  },
  error => {
    console.log(error)
  }
);