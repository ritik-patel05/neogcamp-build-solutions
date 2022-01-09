/*
Write a program to find the maximum and minimum out of two given numbers. The numbers are num1=129 and num2=251.
*/

const findMaximumAndMinimum = (...rest) => {
    return `Maximum is ${Math.max(...rest)}, and Minimum is ${Math.min(...rest)}`;
}

console.log(findMaximumAndMinimum(1, 2, 3));