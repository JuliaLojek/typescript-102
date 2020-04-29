function add(n1, n2, printResult, phrase) {
    if (printResult) {
        console.log(phrase + (n1 + n2));
    }
    else {
        return n1 + n2;
    }
}
var number1 = 5;
var number2 = 2.8;
var printResult = true;
var phrase = "the result is: ";
add(number1, number2, printResult, phrase);
