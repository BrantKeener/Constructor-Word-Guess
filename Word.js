// TODO build array of new letter objects that represent the letters of the word to be guessed
// Function that returns a string representing the word. The function will call each letter object and concatenate either the letter or a blank depending if the word has been guessed
// Function that takes a character, and runs the guess function on each letter object
// require letter.js and only letter.js

const inquirer = require('inquirer');
let letter = require('./Letter.js');
let wordArray = [];
let wordBuilt = [];

// Test building area

const word = 'genuine';

(function wordSplit() {
    let tempWord = word.split('');
    for(let i = 0; i < tempWord.length; i++) {
        wordArray.push(new letter(tempWord[i]));
        wordBuilt.push('_ ');
    };
    initialDisplay();
})();

function initialDisplay() {
    console.log(wordBuilt.join(''));
};

function letterGuess(res) {
    for(let i = 0; i < wordArray.length; i++) {
        wordArray[i].guessCheck(res);
    };
    wordBuild();
};

function wordBuild() {
    for(let i = 0; i < wordArray.length; i++) {
        wordBuilt.splice(i, 1, `${wordArray[i].charGuess()} `);
    };
    console.log(wordBuilt.join(''));
};









