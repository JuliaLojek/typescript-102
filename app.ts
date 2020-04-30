// more specific but not necessary (for tuples it is):
const person: {
  name: string;
  age: number;
  hobbies: string[];  // array of strings
  role: [number, string];  // tuple type
} = {
  name: "Julia",
  age: 26,
  hobbies: ["yoga", "programming"],
  role: [4, "front-end developer"],
};

// also works:
// const person = {
//   name: "Julia",
//   age: 26,
//   hobbies: ["yoga", "programming"]
// };

let favActivities: string[];
favActivities = ["yoga", "books"];

let mixedArray: any[];
mixedArray = ["Julia", 26, true];

console.log(person.name);
