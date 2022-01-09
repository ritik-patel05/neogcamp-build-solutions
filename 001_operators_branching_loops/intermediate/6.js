/*
Write a Program to take a number input from user and find if the number is Prime or not.
*/

// APP1 => TC: O(N)
const checkIfPrimebruteForce = (number) => {
    let isPrime = true;
    if (number <= 1)
        isPrime = false;

    for (let num = 2; num < number; ++num)
        isPrime &= number % num != 0;

    return `The number ${number} is ${isPrime ? "prime" : "not prime"}.`;
};

console.log(checkIfPrimebruteForce(1));
console.log(checkIfPrimebruteForce(2));
console.log(checkIfPrimebruteForce(3));
console.log(checkIfPrimebruteForce(4));
console.log(checkIfPrimebruteForce(5));
console.log(checkIfPrimebruteForce(6));
console.log(checkIfPrimebruteForce(7));

const isPrime = [];
const preCompute = (maxLimit) => {
    for (let i = 0; i <= maxLimit + 1; ++i)
        isPrime.push(true);
    
    isPrime[0] = isPrime[1] = false;
    
    for (let i = 2; i <= maxLimit; ++i) {
        if (isPrime[i]) {
            for (let j = i * i; j <= maxLimit; j += i) {
                isPrime[j] = false;
            }
        }
    }  
}

// App2: Use Prime sieve
// TC: O(NloglogN), SC: O(N)
const checkIfPrimeOptimized = (number) => {
    return `The number ${number} is ${isPrime[number] ? "prime" : "not prime"}.`;
};

preCompute(1000000);
console.log(checkIfPrimeOptimized(30));
console.log(checkIfPrimeOptimized(31));
console.log(checkIfPrimeOptimized(32));
console.log(checkIfPrimeOptimized(37));
