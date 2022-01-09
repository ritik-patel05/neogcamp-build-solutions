/*
Write a program to take a number input from user and print multiplication table 12 times for that number.
*/

const printMultiplicationTable = (number) => {
    let multiplicationTable = "";
    for (let times = 1; times <= 12; ++times) {
        multiplicationTable += `${number} * ${times} = ${number * times} \n`;
    }
    return multiplicationTable;
};

console.log(printMultiplicationTable(13));
