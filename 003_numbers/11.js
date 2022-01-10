/*
Write a Program to cyclically Rotate a Number by X positions in the left direction, as provided by the user.

Example-

Enter a Number : 1234
Enter the Number of Rotations : 2
Output : 3412
*/

const rotateByNPlaces = (number, N) => {
    const str = String(number);

    let rotatedStr = "";
    for (let id = N; id < str.length; ++id) 
        rotatedStr += str[id];
    
    for (let id = 0; id < N; ++id) 
        rotatedStr += str[id];
    
    return Number(rotatedStr);
};

console.log(rotateByNPlaces(1234, 2));