
let letter = require('./Letter.js');
let letterArray = [];
let wordBuilt = [];
let remainingGuesses = 5;
let lettersGuessed = [];
const playArea = `\n||=====Word To Be Guessed=====||\n`

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
    console.log(`\n${playArea}\n${wordBuilt.join('')}\n${playArea}`);
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
    console.log(`\n${playArea}\n${wordBuilt.join('')}\n${playArea}`);
};

module.exports = { remainingGuesses, lettersGuessed, letterArray, wordSplit, letterGuess };
