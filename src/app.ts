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

function WithTemplate(template: string, hookId: string) {
  return function (_: Function) {
    const hookEl = document.getElementById(hookId);
    if (hookEl) {
      hookEl.innerHTML = template;
    }
  };
}

// @Logger("Logging - person...")
@WithTemplate("<h3>My person object</h3>", "app")
class Person {
  name = "julia";

  constructor() {
    console.log("creating person object...");
  }
}

// const person = new Person();
// console.log(person);
