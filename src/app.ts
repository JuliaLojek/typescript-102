// type Person = {
//   name: string;
//   age: number;
//   greet(phrase: string): void;
// }

// types and interfaces can sometimes be used interchangeably

interface Greetable {  // preferably with a capital letter
  name: string;
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