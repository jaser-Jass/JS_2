// N 1
//let num1 = parseInt(prompt("num1 = "));
//let num2 = parseInt(prompt("num2 = "));
//if (num1 <= 1 && num2 >= 3) {
//    console.log("True")
//} else {
//    console.log("False")
//}
// N 2
//let test = true;
//console.log(test === true ? '+++' : '---');

// N 3
//let day = prompt("Enter: ");
//day = parseInt(day)
//let decade;
//if (day <= 10) {
//    decade = "I decade";
//} else if (day <= 20) {
//    decade = "II decade";
//} else {
//    decade = "III decade";
//}
//console.log(decade);

// N 4
let number = prompt("Enter: ");
number = parseInt(number);
let hundreds = Math.floor(number / 100);
let tens = Math.floor((number % 100) / 10);
let units = number % 10;
console.log("hundreds = " + hundreds + ", tens = " + tens + ", units = " + units);

