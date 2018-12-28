// TODO build array of new letter objects that represent the letters of the word to be guessed
// Function that returns a string representing the word. The function will call each letter object and concatenate either the letter or a blank depending if the word has been guessed
// Function that takes a character, and runs the guess function on each letter object
// require letter.js and only letter.js

let letter = require('./Letter.js');
let letterArray = [];
let wordBuilt = [];
let remainingGuesses = 5;
let lettersGuessed = [];

function wordSplit(word) {
    letterArray.length = 0;
    wordBuilt.length = 0;
    lettersGuessed.length = 0;
    let tempWord = word.split('');
    for(let i = 0; i < tempWord.length; i++) {
        letterArray.push(new letter(tempWord[i]));
        wordBuilt.push('_ ');
    };
    initialDisplay();
};

function initialDisplay() {
    console.log(`\n${wordBuilt.join('')}`);
};

function letterGuess(res) {
    let tempArray = [];
    letterArray.map(x => {
        tempArray.push(x.letter);
    });
    if(tempArray.includes(res)) {
        for(let i = 0; i < letterArray.length; i++) {
            letterArray[i].guessCheck(res);
        };
    } else {
        if(!lettersGuessed.includes(res)) {
            lettersGuessed.push(res);
        };
    };
    wordBuild();
};

function wordBuild() {
    for(let i = 0; i < letterArray.length; i++) {
        wordBuilt.splice(i, 1, `${letterArray[i].charGuess()} `);
    };
    console.log(`\n${wordBuilt.join('')}\n`);
};

module.exports = { remainingGuesses, lettersGuessed, letterArray, wordSplit, letterGuess };
