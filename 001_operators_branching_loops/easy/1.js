/*
Write a program to add 5 numbers. The value of numbers are num1=5, num2=13, num3=7, num4=21 and num5=48.
*/

// using rest parameters
// App1: using forEach
const addNumbers = (...rest) => {
	let sum = 0;
	rest.forEach(elementValue => sum += elementValue);
	return sum;
}

// App2: Better use reduce
const addNumbers2 = (...rest) => {
	return rest.reduce((previousValue, currentValue) => previousValue + currentValue);
}

console.log(addNumbers(1, 2, 3, 4, 5));
console.log(addNumbers2(1, 2, 3, 4, 5));

 