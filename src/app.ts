////////// built-in generic types

const names: Array<string> = ["julia", "frania"]; //  the same as const names: string[]
const unions: Array<string | number> = ["julia", "frania", 204];

///////// promises

const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("This is resolved!");
  }, 2000);
});

///////// generic functions

function merge(objA: object, objB: object) {
  // if we combine objects like that we then couldn't access properties or methods of a merged objects (the result of the function) because it only knows that it's an object but doesn't know it's structure
  return Object.assign(objA, objB);
}

// const mergedObj = merge({name: "julia"}, {age: 26});
// const age = mergedObj.age;    // it's impossible here

// this is why we use generics:

function merge2<T, U>(objA: T, objB: U) {
  // ts understands that this function returns T & U type
  return Object.assign(objA, objB);
}

const mergedObj2 = merge2({ name: "julia" }, { age: 26 });
const age2 = mergedObj2.age; // now it works
console.log(age2);

///////// generic constraints

function merge3<T extends object, U extends object>(objA: T, objB: U) {
  // both types T and U must be objects
  return Object.assign(objA, objB);
}

///////// more generic functions

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(el: T): [T, string] {
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

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return obj[key];
}

console.log(extractAndConvert({ name: "julia" }, "name"));

//////// GENERIC CLASSES

class DataStorage<T extends string | number | boolean> {
  // we just say here we want one type of data and we specify it while creating instances
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1); // won't work with removing objects (reference)
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("julia");
textStorage.addItem("ktos");
textStorage.removeItem("julia");
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();
numberStorage.addItem(329);
numberStorage.addItem(423849);
numberStorage.removeItem(329);
console.log(numberStorage.getItems());

///////////  Partial type

interface CourseGoal {
  title: string;
  description: string;
  comspleteUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};  // temporarily sets this variable to be of type Partial - sets all the properties and methods of the CourseGoal interface as optional
  courseGoal.title = title;
  courseGoal.description = description;    // Partial gives us the possibility to add properties and methods step by step, i.e. if we have some extra validations
  courseGoal.comspleteUntil = date;
  return courseGoal as CourseGoal;  // here we manually change it from Partial type to CourseGoal type
}


/////// Readoly type

const names2: Readonly<string[]> = ["julia", "adam"];
// names2.push("ktos");  // we can't do it because names2 is of type Readonly