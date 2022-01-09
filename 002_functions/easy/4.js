/*
Given n numbers, your function should return the minimum of them all. The number of parameters won't be accepted from user.
Example:
Input: findMin(3,5) ––> Output: 3
Input: findMin(3,5,9,1) ––> Output: 1
*/

const findMinimum = (...rest) => {
    return `Minimum is ${Math.min(...rest)}`;
}

console.log(findMinimum(1, 2, 3));