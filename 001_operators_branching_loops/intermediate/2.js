/*
Print the following star pattern :-

* 
* * 
* * * 
* * * * 
* * * * *
*/

// App1: Using strings
const printNStarRows = (totalRows) => {
    const result = "";
    for (let row = 0; row < totalRows; ++row) {
        const newRow = ""
        for (let col = 0; col < row + 1; ++col) {
            newRow += "* ";
        }
        result += newRow + "\n";
    }
    return result;
}

// App2: using arrays join
const printNStarRows1 = (totalRows) => {
    const result = [];
    for (let row = 0; row < totalRows; ++row) {
        let newRow = ""
        for (let col = 0; col < row + 1; ++col) {
            newRow += "* ";
        }
        result.push(newRow + "\n");
    }
    return result.join("");
}


console.log(printNStarRows(5));
console.log(printNStarRows1(5));