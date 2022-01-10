/*
Calculate the area, perimeter of a square of side 'a'. Also, calculate the surface area and the volume of a cube of side 'a'.

Formula :

Area: a*a

Perimeter: 4*a

Surface Area: 6*a*a

Volume: a*a*a
*/

const calculateForSquare = (a) => {
    return [a * a, 4 * a, 6 * a * a, a * a * a];
}

console.log(calculateForSquare(3));