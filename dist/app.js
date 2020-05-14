"use strict";
// option 1:
// function Logger(constructor: Function) {
//   console.log("Logging...");
//   console.log(constructor);
// }
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// option 2:
function Logger(text) {
    return function (constructor) {
        console.log(text);
        console.log(constructor);
    };
}
function WithTemplate(template, hookId) {
    return function (_) {
        const hookEl = document.getElementById(hookId);
        if (hookEl) {
            hookEl.innerHTML = template;
        }
    };
}
// @Logger("Logging - person...")
let Person = class Person {
    constructor() {
        this.name = "julia";
        console.log("creating person object...");
    }
};
Person = __decorate([
    WithTemplate("<h3>My person object</h3>", "app")
], Person);
// const person = new Person();
// console.log(person);
//# sourceMappingURL=app.js.map