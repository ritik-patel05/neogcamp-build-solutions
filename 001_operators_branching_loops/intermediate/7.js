/*
Write a program to take a day as an input and determine whether it is a weekday or weekend.
*/

const isDayWeekdayOrWeekend = (day) => {
    return `${day} is ${day == "Sunday" || day == "Saturday" ? "Weekend" : "Weekday"}.`;
};

console.log(isDayWeekdayOrWeekend("Saturday"));
console.log(isDayWeekdayOrWeekend("Monday"));