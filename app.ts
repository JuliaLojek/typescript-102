let userInput: unknown;
let userName: string;

userInput = 4;
userInput = "Julia";
if (typeof userInput === "string") {
  userName = userInput;
}

function generateError(message: string, code: number): never {
  throw {message: message, errorCode: code};
}

generateError("some error", 500);