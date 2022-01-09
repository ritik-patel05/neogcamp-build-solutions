/*
Given a sentence, your functions should return the number of words in the sentence.
Example:
Input: noOfWords(We are neoGrammers) ––> Output: 3
*/

const getNumberOfWords = (sentence) => sentence.split(" ").length;

console.log(getNumberOfWords("We are neoGrammers"));