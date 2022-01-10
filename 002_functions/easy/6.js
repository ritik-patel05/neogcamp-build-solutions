/*
Given three angles of a triange, your function should return if it is a scalene, isosceles, equilateral triangle or not a triangle at all. Example:
Input: typeOfTriangle(30, 60, 90) ––> Output: Scalene Triangle
*/

const typeOfTriangle = (firstAngle, secondAngle, thirdAngle) => {
    let type = "";
    if (firstAngle + secondAngle + thirdAngle != 180)
        type = "Not a triangle";
    else {
        if (firstAngle == secondAngle && secondAngle == thirdAngle) type = "equilateral";
        else if (fi)
    }
}