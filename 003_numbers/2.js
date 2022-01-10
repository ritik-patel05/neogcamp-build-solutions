/*
Write a JavaScript program to calculate the simple interest given P,R,T with the given formula. Formula: SI = (P * T * R) / 100 Where: P = principal amount T = time R = rate SI = simple interest

Input: P=100, R=6%, T=2
Output: 12
*/

const calculateSI = (P, R, T) => ((P * R * T) / 100).toFixed(2);

console.log(calculateSI(100, 6, 2));