"use strict";
// type Person = {
//   name: string;
//   age: number;
//   greet(phrase: string): void;
// }
var Person = /** @class */ (function () {
    function Person(name) {
        this.age = 26;
        this.name = name;
    }
    Person.prototype.greet = function (phrase) {
        console.log(phrase + " " + this.name);
    };
    return Person;
}());
var user1;
user1 = new Person("Julia");
user1.greet("Hi, I'm");
//# sourceMappingURL=app.js.map