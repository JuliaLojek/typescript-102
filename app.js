function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log("Result is: " + num);
}
function addAndHandle(n1, n2, callback) {
    var result = n1 + n2;
    callback(result);
}
printResult(add(8, 10));
var combineValues;
combineValues = add;
addAndHandle(12, 3, function (result) { return console.log(result); });
