/*
Given length of a regular hexagon, your function should return area of the hexagon.
Example:
Input: areaOfHexagon(10) ––> Output: 259.80
*/

const areaOfHexagon = a => {
    return (3 / 2 * Math.sqrt(3) * a * a).toFixed(2);
}

console.log(areaOfHexagon(10));