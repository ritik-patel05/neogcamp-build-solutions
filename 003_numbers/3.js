/*
Write a program to calculate the kinetic energy of a body with mass 'm' and volume 'v'.

Formula : 0.5 * m * v * v
*/

const calculateKE = (m, v) => (0.5 * m * v * v).toFixed();

console.log(calculateKE(10, 15));