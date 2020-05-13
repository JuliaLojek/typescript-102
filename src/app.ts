////////// built-in generic types

const names: Array<string> = ["julia", "frania"]; //  the same as const names: string[]
const unions: Array<string | number> = ["julia", "frania", 204];

///////// promises

const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("This is resolved!");
  }, 2000);
});
