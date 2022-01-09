/*
Write program to take a month as an input from the user and find out whether the month has 31 days or not.
*/
const mapMonthToInteger = {
    "January": 0,
    "February": 1,
    "March": 2,
    "April": 3,
    "May": 4,
    "June": 5,
    "July": 6,
    "August": 7,
    "September": 8,
    "October": 9,
    "November": 10,
    "December": 11,
}
const hasMonth31DaysOrNot = month => {
    return `The month ${ mapMonthToInteger[month] % 2 == 0 ? "HAS" : "DOESNT HAVE" } 31 days`;
}

console.log(hasMonth31DaysOrNot("January"), hasMonth31DaysOrNot("February"), hasMonth31DaysOrNot("March"), hasMonth31DaysOrNot("April"));
