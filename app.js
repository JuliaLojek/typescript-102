var userInput;
var userName;
userInput = 4;
userInput = "Julia";
if (typeof userInput === "string") {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError("some error", 500);
