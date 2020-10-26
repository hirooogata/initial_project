'use strict';

class Vechicle {
  constructor(name, wheels) {
    this.name = name;
    this.wheels = wheels;
  }
  spec() {
    console.log("この乗り物の名前は" + this.name + "です。車輪の数は" + this.wheels + "個です。");
  }
}

class Car extends Vechicle {
  constructor(name, maker) {
    super(name, 4);
    this.maker = maker;
  }
  spec() {
    super.spec();
    console.log(this.maker + "で製造されています。");
  }
}

class Bike extends Vechicle {
  constructor(name) {
    super(name, 2);
  }
}

export { Car, Bike };