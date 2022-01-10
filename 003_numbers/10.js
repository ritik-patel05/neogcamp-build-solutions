/*
Write a JavaScript program that reverses a number.

Example:

Input:  32243;
Output:  34223
*/

const reverseANumber = (number) => {
    const str = String(number);
    const reverseString = str.split("").reverse().join("");
    return Number(reverseString);
};

console.log(reverseANumber(32243));