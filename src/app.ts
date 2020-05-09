//////////// interfaces

// type Person = {    // type!!
//   name: string;
//   age: number;
//   greet(phrase: string): void;
// }

// types and interfaces can sometimes be used interchangeably

interface Named { // interface!! - preferably with a capital letter
  readonly name: string;
}

interface Greetable extends Named {  // we can extend interfaces (with more than one interface - with comas)
  greet(phrase: string): void;
}

class Person implements Greetable {
  constructor(name: string) {
    this.name = name;
  }
  name: string;
  age = 26;
  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  }
}

let user1: Greetable;

user1 = new Person("Julia");

user1.greet("Hi, I'm");

/////////////  function interfaces (functions are objects)

// type AddFn = (a: number, b: number) => number;

interface AddFn {
  (a: number, b: number): number;  // almost like a method type declaration in object iterface, but anonymous
}

let add: AddFn;

add = (n1: number, n2: number) => {
  return n1 + n2;
};

