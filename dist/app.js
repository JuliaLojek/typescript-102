"use strict";
////////// built-in generic types
const names = ["julia", "frania"]; //  the same as const names: string[]
const unions = ["julia", "frania", 204];
///////// promises
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("This is resolved!");
    }, 2000);
});
///////// generic functions
function merge(objA, objB) {
    // if we combine objects like that we then couldn't access properties or methods of a merged objects (the result of the function) because it only knows that it's an object but doesn't know it's structure
    return Object.assign(objA, objB);
}
// const mergedObj = merge({name: "julia"}, {age: 26});
// const age = mergedObj.age;    // it's impossible here
// this is why we use generics:
function merge2(objA, objB) {
    // ts understands that this function returns T & U type
    return Object.assign(objA, objB);
}
const mergedObj2 = merge2({ name: "julia" }, { age: 26 });
const age2 = mergedObj2.age; // now it works
console.log(age2);
///////// generic constraints
function merge3(objA, objB) {
    // both types T and U must be objects
    return Object.assign(objA, objB);
}
function countAndDescribe(el) {
    let description = "no value";
    if (el.length > 0) {
        description = `Input has ${el.length} elements`;
    }
    return [el, description];
}
console.log(countAndDescribe("hello stranger")); // it works with a string because under the hood everything is an object plus every string has a length property
console.log(countAndDescribe([482309, 4394]));
console.log(countAndDescribe({ name: "julia", surname: "lojek", length: 329 }));
//////// keyof
function extractAndConvert(obj, key) {
    return obj[key];
}
console.log(extractAndConvert({ name: "julia" }, "name"));
//////// GENERIC CLASSES
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data.splice(this.data.indexOf(item), 1); // won't work with removing objects (reference)
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem("julia");
textStorage.addItem("ktos");
textStorage.removeItem("julia");
console.log(textStorage.getItems());
const numberStorage = new DataStorage();
numberStorage.addItem(329);
numberStorage.addItem(423849);
numberStorage.removeItem(329);
console.log(numberStorage.getItems());
//# sourceMappingURL=app.js.map