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

let profile = new Person('Mt.Ogata', '31');
profile.voice();