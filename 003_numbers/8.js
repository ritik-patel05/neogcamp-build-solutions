/*
Write a Program to Print N Odd Number in Descending Order.

Input : 4
Output : 7
5
3
1
*/

const printNOddNumbersDescOrder = N => {
    for (let num = N * 2 - 1; num >= 1; num -= 2) {
        console.log(num);
    }
};

printNOddNumbersDescOrder(4);