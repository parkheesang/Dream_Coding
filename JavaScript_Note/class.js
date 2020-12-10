'use strict';
// Objcet-oriendted programming
// class: template
// object: instance of a class
// JavaScript classes
// - introduced in ES6
// - sysntactical sugar over prototype-based inheritance

// 1. Class declarations
class Person {
  //constructor 생성자
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // methods
  speak() {
    console.log(`${this.name},${this.age}: hello!`);
  }
}

const edward = new Person('edward', 20);
console.log(edward.name);
console.log(edward.age);
edward.speak();

// 2. Getter and setters
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get age() {
    return this._age;
  }
  set age(value) {
    // if (value < 0){
    //   throw Error('age can not be negative');
    // }
    this._age = value < 0 ? 0 : value;
  }
}

const user1 = new User('Steve', 'Job', -1);
console.log(user1.age);

// 3. Fields (public, private)
// Too soon! 최근에 추가됨
// 
class Experiment {
  publicField = 2;
  #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

// 4. Static properties and methods
// Too soon!
class Article {
  static publisher = 'Dream Coding';
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }

  static printPublisher() {
    console.log(Article.publisher);
  }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.publisher);
Article.printPublisher();

// 5. Inheritance
// a way for one class to extend another class.
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }
  draw() {
    console.log(`drawing ${this.color} color!`);
  }

  getArea() {
    return this.width * this.height;
  }
}

class Rectangle extends Shape{}
class Triangle extends Shape{
  // overriding
  draw() {
    super.draw();
    console.log('🔺');
  }
  getArea() { // 삼각형 너비 구하기
    return (this.width * this.height) / 2;
  }

  toString() {
    return `Triagle: color: ${this.color}`;
  }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());

const triagle = new Triangle(20, 20, 'red');
triagle.draw();
console.log(triagle.getArea());

// 6. Class checking instanceOf
console.log(rectangle instanceof Rectangle);
console.log(triagle instanceof Rectangle);
console.log(triagle instanceof Triangle);
console.log(triagle instanceof Shape);
console.log(triagle instanceof Object);
console.log(triagle.toString());