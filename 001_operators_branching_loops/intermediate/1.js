/*
Fizzbuzz - Write a program to return an array from 1 to 100. But for every multiple of 3, replace the number with "Fizz", for every multiple of 5, replace the number with "Buzz" and for every multiples of 3 & 5, replace with "FizzBuzz".

Your output should look something like this 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz, 16, 17 .....
*/

const getFizzBuzzArray = () => {
    const fizzBuzzArray = [];

    for (let num = 1; num <= 100; ++num) {
        let value = num;

        if (value % 3 == 0 && value % 5 == 0) value = "FizzBuzz";
        else if (value % 3 == 0) value = "Fizz";
        else if (value % 5 == 0) value = "Buzz";

        fizzBuzzArray.push(value);
    }

    return fizzBuzzArray;
}

console.log(getFizzBuzzArray);