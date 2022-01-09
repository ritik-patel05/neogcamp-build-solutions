/*
Given a sentence, return a sentence with first letter of all words as capital.
Example:
Input: toSentenceCase('we are neoGrammers') ––> Output: We Are NeoGrammers
*/

const toSentenceCase = sentence => {
    const wordsArray = sentence.split(" ");
    wordsArray.map( word => word[0].toUpperCase() + word.slice(1) );
    return wordsArray.join(" ");
};

console.log(toSentenceCase('we are neoGrammers'));