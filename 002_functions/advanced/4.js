/*
Given a sentence, your function should reverse the order of characters in each word, keeping same sequence of words.
Example:
Input: reverseCharactersOfWord('we are neoGrammers') –––> Output: ew era sremmarGoen
*/

const reverseCharactersOfWord = (sentence) => {
    let wordsArray = sentence.split(" ");
    wordsArray = wordsArray.map(word => word.split("").reverse().join(""))
    return wordsArray.join(" ");
};

console.log(reverseCharactersOfWord('we are neoGrammers'));