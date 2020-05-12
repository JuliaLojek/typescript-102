//////////  intersection - object types (combination)

type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  // it has all properties and methods of all added object types
  name: "Julia",
  privileges: ["work"],
  startDate: new Date(),
};

type UnknownEmployee = Admin | Employee;

function printEployeeInfo(emp: UnknownEmployee) {
  console.log("Name: " + emp.name);
  if ("privileges" in emp) {                   // type guard for object union types
    console.log("Privileges: " + emp.privileges);
  }
  if ("startDate" in emp) {
    console.log("Start Date: " + emp.startDate);
  }
}

printEployeeInfo(e1);

//////////  intersection - union types (only types found in all added types)

type Combinable = string | number;
type Numeric = number | boolean;
type Universal = Combinable & Numeric; // Universal is of type number - intersection of Combinable and Numeric

function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString(); //  this structure is a type guard
  }
  return a + b; // this runs only when none of them is a string
}

////////  type guards

class Car {
  drive() {
    console.log("driving");
  }
}

class Truck {
  drive() {
    console.log("driving a truck...");
  }
  loadCargo(num: number) {
    console.log("loading cargo..." + num);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  // if ("loadCargo" in vehicle) {   // TS type guard
  //   vehicle.loadCargo(1000);
  // }
  if (vehicle instanceof Truck) {    // JS feature
    vehicle.loadCargo(2000);
  }
}

useVehicle(v1);
useVehicle(v2);

/////////// discriminatd unions

interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed: number;
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

const parrot: Bird = {
  type: "bird",
  flyingSpeed: 200,
}

moveAnimal(parrot);

/////////  type casting

const userInput = <HTMLInputElement>document.querySelector("#userName")!;  // ! means: TS, don't worry, this element exists

userInput.value = "Hi there!";