// option 1:
// function Logger(constructor: Function) {
//   console.log("Logging...");
//   console.log(constructor);
// }

// option 2:
function Logger(text: string) {
  return function (constructor: Function) {
    console.log(text);
    console.log(constructor);
  };
}

@Logger("Logging - person...")
class Person {
  name = "julia";

  constructor() {
    console.log("creating person object...");
  }
}

// const person = new Person();
// console.log(person);
