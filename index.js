console.log("This is my first programe")
console.log("Wellcome john your month salary is 50000")



const num1 = 5;
const num2 = 3;
// add two numbers
const sum = num1 + num2;
// display the sum
console.log('The sum of ' + num1 + ' and ' + num2 + ' is: ' + sum);



console.log(' ');
console.log('user input function');
// program that checks if the number is positive, negative or zero
// input from the user
const prompt = require('prompt-sync')();
const number = parseInt(prompt("Enter a number: "));
// check if number is greater than 0
if (number > 0) {
 console.log("The number is positive");
}
// check if number is 0
else if (number == 0) {
 console.log("The number is zero");
}
// if number is less than 0
else {
 console.log("The number is negative");
}