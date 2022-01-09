/*
Write a program to take an input from a user and find its Factorial. 
*/

const getFactorial = (number) => {
    if (number <= 1)
        return 1;
    
    let factorialResult = 2;
    for (let times = 3; times <= number; ++times) 
        factorialResult *= times;
    
    return factorialResult;
};

console.log(getFactorial(0));
console.log(getFactorial(1));
console.log(getFactorial(3));
console.log(getFactorial(5)); 