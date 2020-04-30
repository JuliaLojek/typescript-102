function add(n1: number, n2: number): number {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log("Result is: " + num);
}

function addAndHandle(n1: number, n2: number, callback: (num: number) => void) {
  const result = n1 + n2;
  callback(result);
}

printResult(add(8, 10));

let combineValues: (a: number, b: number) => number;
combineValues = add;

addAndHandle(12, 3, result => console.log(result));