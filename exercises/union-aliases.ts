// type aliases - usually to store union types:
type Combinable = number | string;
type ConversionDescriptor = "as-number" | "as-text";

function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescriptor  // literal type
) {
  let result: Combinable;
  if (typeof input1 === "number" && typeof input2 === "number" || resultConversion === "as-number") {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

console.log(combine(30, 4, "as-number"));
console.log(combine("48", "20", "as-number"));
console.log(combine("Julia", " is cool", "as-text"));
