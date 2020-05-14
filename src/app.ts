function Logger(constructor: Function) {
  console.log("Logging...");
  console.log(constructor);
}

@Logger
class Person {
  name = "julia";

  constructor() {
    console.log("creating person object...");
  }
}

// const person = new Person();
// console.log(person);