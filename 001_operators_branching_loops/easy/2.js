/*
Write a program to take a number input from user and determine whether the number is odd or even.
*/

const isNumberEvenOrOdd = (inputNumber) => console.log(`The number is ${ inputNumber % 2 == 0 ? "even" : "odd"}`);

console.log(isNumberEvenOrOdd(5));
console.log(isNumberEvenOrOdd(6));