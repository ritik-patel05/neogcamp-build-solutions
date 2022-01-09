/*
Given a and b, your function should return the value of ab
Example:
Input: power(2,3) ––> Output: 8
*/

// TC: O(logB)
const power = (a, b) => {
    const res = 1;
    while (b > 0) {
        if (b & 1) res *= a;
        a *= a;
        b = Math.floor(b / 2);
    }
    return res;
}

console.log(power(2, 3));
console.log(power(2, 4));