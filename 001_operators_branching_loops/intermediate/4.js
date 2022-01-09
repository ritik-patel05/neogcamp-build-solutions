/*
Write a program to return a Fibonacci series : 0,1,1,2,3,5,8,13,21....
*/

const generateFibonacci = (totalIterations) => {
    const fibSeries = [];
    if (totalIterations == 0) return fibSeries;

    if (totalIterations >= 1) fibSeries.push(0);
    if (totalIterations >= 2) fibSeries.push(1);

    let currValue = 1;
    let prevValue = 0;

    for (let times = 3; times <= totalIterations; ++times) {
        let newValue = prevValue + currValue;
        prevValue = currValue;
        currValue = newValue;
        fibSeries.push(newValue);
    }

    return fibSeries;
}

console.log(generateFibonacci(0));
console.log(generateFibonacci(1));
console.log(generateFibonacci(2));
console.log(generateFibonacci(5));
console.log(generateFibonacci(8));