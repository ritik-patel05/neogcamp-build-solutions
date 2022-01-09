/*
Given an array and two numbers, your function should replace all entries of first number in an array with the second number.
Example:
Input: replace([1,5,3,5,6,8], 5, 10) ––> Output: [1,10,3,10,6,8]
*/

const replace = (arr, firstNum, secondNum) => {
    return arr.map(value => value == firstNum ? secondNum : value);
}

console.log(replace([1,5,3,5,6,8], 5, 10));