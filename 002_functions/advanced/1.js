/*
Write a function which generates a secret code from a given string, by shifting characters of alphabet by N places. Example:
Input: encodeString("neogcamp", 2) ––> Output: pgqiecor
Explanation: 2 represents shifting alphabets by 2 places. a –> c, b –> d, c –> e and so on.
*/

const encodeString = (str, N) => {
    let encodedString = "";
    for(let i = 0; i < str.length; ++i) {
        let addN = (str[i].charCodeAt() + N % 26 );
        if (addN > 122) addN -= 26;
        encodedString += String.fromCharCode(addN);
    }
    return encodedString;
}

console.log(encodeString("neogcamz", 2));