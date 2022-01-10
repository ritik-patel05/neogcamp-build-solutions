/*
Write a program to calculate sum of N natural digits, as input by the users?

Enter a positive integer: 100
Sum = 5050
*/

const sumOfNNaturalDigits = x => x * (x + 1) / 2;

console.log(sumOfNNaturalDigits(100));