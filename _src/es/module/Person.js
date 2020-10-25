'use strict';

class Person {
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
  voice() {
    console.log(`${this.name} is ${this.age} years old`); 
  }
}

export default Person;