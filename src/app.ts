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
  console.log("TEMPLATE FACTORY");
  return function (constructor: any) {
    console.log("Rendering template");
    const hookEl = document.getElementById(hookId);
    const p = new constructor();
    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector("h3")!.textContent = p.name;
    }
  };
}

function WithTemplate2(template: string, hookId: string) {
  console.log("TEMPLATE FACTORY");
  return function <T extends { new (...args: any[]): { name: string } }>(
    originalConstructor: T
  ) {
    return class extends originalConstructor {
      // when we return class inside the decorator function this code gets executed when an instance of an object is created
      constructor(..._: any[]) {
        super(); // here we save the original class with the original constructor
        // and here we add new code - new functionality execited when an instance is created
        console.log("Rendering template");
        const hookEl = document.getElementById(hookId);
        if (hookEl) {
          hookEl.innerHTML = template;
          hookEl.querySelector("h3")!.textContent = this.name;
        }
      }
    };
  };
}

@Logger("Logging - person...")
@WithTemplate2("<h3>My person object</h3>", "app")
class Person {
  name = "julia";

  constructor() {
    console.log("creating person object...");
  }
}

const person = new Person();
console.log(person);

/////////////

function Log(target: any, propertyName: string | Symbol) {
  console.log("Property decorator");
  console.log(target, propertyName);
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log("Accessor decorator");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log3(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log("Method decorator");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log4(target: any, name: string, position: number) {
  console.log("Parameter decorator");
  console.log(target);
  console.log(name);
  console.log(position);
}

class Product {
  @Log
  title: string;
  private _price: number;

  @Log2
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this._price * (1 + tax);
  }
}

///////////// autobind decorator

function autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      const boundFunction = originalMethod.bind(this);
      return boundFunction;
    },
  };
  return adjDescriptor;
}

class Printer {
  message = "This works!";

  @autobind
  showMessage() {
    console.log(this.message);
  }
}

const p = new Printer();

const button = document.querySelector("button")!;
// button.addEventListener("click", p.showMessage.bind(p));  // binding p as this
button.addEventListener("click", p.showMessage); // autobinding with a decorator

/////////// validation with decorators

function Required() {}

function PositiveNumber() {}

function validate(obj: object) {}

class Course {
  // @Required
  title: string;
  // @PositiveNumber
  price: number;

  constructor(t: string, p: number) {
    this.title = t;
    this.price = p;
  }
}

const courseForm = document.querySelector("form")!;
courseForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const titleEl = document.getElementById("title") as HTMLInputElement;
  const priceEl = document.getElementById("price") as HTMLInputElement;
  const title = titleEl.value;
  const price = +priceEl.value;

  const createdCourse = new Course(title, price);
  // if (!validate(createdCourse)) {
  //   return alert("Invalid input, please try again!");
  // }
  console.log(createdCourse);
  titleEl.value = "";
  priceEl.value = "";
});
