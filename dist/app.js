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
///////// generci functions
function merge(objA, objB) {
    // if we combine objects like that we then couldn't access properties or methods of a merged objects (the result of the function) because it only knows that it's an object but doesn't know it's structure
    return Object.assign(objA, objB);
}
// const mergedObj = merge({name: "julia"}, {age: 26});
// const age = mergedObj.age;    // it's impossible here
// this is why we use generics:
function merge2(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObj2 = merge2({ name: "julia" }, { age: 26 });
const age2 = mergedObj2.age; // now it works
console.log(age2);
//# sourceMappingURL=app.js.map