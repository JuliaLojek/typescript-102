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
//# sourceMappingURL=app.js.map