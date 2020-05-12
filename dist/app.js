"use strict";
//////////  intersection - object types (combination)
var e1 = {
    // it has all properties and methods of all added object types
    name: "Julia",
    privileges: ["work"],
    startDate: new Date(),
};
function printEployeeInfo(emp) {
    console.log("Name: " + emp.name);
    if ("privileges" in emp) { // type guard for object union types
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
    if (vehicle instanceof Truck) { // JS feature
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
//# sourceMappingURL=app.js.map