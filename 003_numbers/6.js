/*
Given the Cost Price(CP) and Selling Price(SP) of a product. Write a Program to Calculate the Profit or Loss.

Input: CP = 1500, SP = 2000
Output: 500 Profit

Input: CP = 3125, SP = 1125
Output: 2000 Loss
*/

const calculateProfitOrLoss = (cp, sp) => {
    const diff = Math.abs(sp - cp);
    let whichCase;
    if (sp - cp == 0) whichCase = "same"
    else if (sp > cp) whichCase = "profit"
    else whichCase = "loss"
    return `${diff} ${whichCase}`;
};

console.log(calculateProfitOrLoss(1500, 2000));