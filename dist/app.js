"use strict";
//////////  intersection - object types (combination)
var _a;
var e1 = {
    // it has all properties and methods of all added object types
    name: "Julia",
    privileges: ["work"],
    startDate: new Date(),
};
function printEployeeInfo(emp) {
    console.log("Name: " + emp.name);
    if ("privileges" in emp) {
        // type guard for object union types
        console.log("Privileges: " + emp.privileges);
    }
    if ("startDate" in emp) {
        console.log("Start Date: " + emp.startDate);
    }
}
printEployeeInfo(e1);
function add(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString(); //  this structure is a type guard
    }
    return a + b; // this runs only when none of them is a string
}
var result = add(4, 6); // result is of type Combinable so you can't use either number nor string methods on it...
var result2 = add("julia", "lojek"); // now it is said to be treated as a string and the methods work
function add2(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
var result3 = add2(4, 6); // now due to function overload it is a number type
var result4 = add2("julia", "lojek"); // same
////////  type guards
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        console.log("driving");
    };
    return Car;
}());
var Truck = /** @class */ (function () {
    function Truck() {
    }
    Truck.prototype.drive = function () {
        console.log("driving a truck...");
    };
    Truck.prototype.loadCargo = function (num) {
        console.log("loading cargo..." + num);
    };
    return Truck;
}());
var v1 = new Car();
var v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    // if ("loadCargo" in vehicle) {   // TS type guard
    //   vehicle.loadCargo(1000);
    // }
    if (vehicle instanceof Truck) {
        // JS feature
        vehicle.loadCargo(2000);
    }
}
useVehicle(v1);
useVehicle(v2);
function moveAnimal(animal) {
    var speed;
    switch (animal.type) {
        case "bird":
            speed = animal.flyingSpeed;
            break;
        case "horse":
            speed = animal.runningSpeed;
            break;
    }
    console.log("The animal is moving with the speed of " + speed + " m/s");
}
var parrot = {
    type: "bird",
    flyingSpeed: 200,
};
moveAnimal(parrot);
/////////  type casting
// const userInput = <HTMLInputElement>document.querySelector("#userName")!;  // ! means: TS, don't worry, this element exists
var userInput = document.querySelector("#userName"); // the same as above
userInput.value = "Hi there!";
var anotherInput = document.querySelector("#something"); // if we aren't sure id such an element exists in DOM
if (anotherInput) {
    anotherInput.value = "Hello";
}
var errorBag = {
    id: "1",
    email: "Not a valid email!",
    username: "Not a valid username!",
};
//////////  optional chaining
var fetchedUserData = {
    id: "u1",
    name: "julia",
    job: {
        title: "developer",
        description: "awesome person",
    },
};
console.log((_a = fetchedUserData === null || fetchedUserData === void 0 ? void 0 : fetchedUserData.job) === null || _a === void 0 ? void 0 : _a.title); // allows to check if that propert exists and if it does go deeper; it;s similar to JS chaining: fetchedUserData && job && title
//////////  nullish coalescing - when you want to check if a value is a null or an undefined
var input = 0;
var storedData = input || "default"; // this option rejects every falsy value, also an empty string or a zero
var storedData2 = input !== null && input !== void 0 ? input : "default"; // this option only rejects null or undefined
console.log(storedData);
console.log(storedData2);
//# sourceMappingURL=app.js.map