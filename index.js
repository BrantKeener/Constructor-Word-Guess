
const inquirer = require('inquirer');
const divider = `\n====================\n`;
const wordBuilder = require('./Word.js');
let wordObject = [
    {
        word: 'genuine',
        hint: 'Another word for authentic.'
    },
    {
        word: 'coins',
        hint: 'Money, but in metallic form.'
    },
    {
        word: 'antibiotics',
        hint: 'A pharamceutical that will not help with the flu, but will help with a bacterial infection.'
    },
    {
        word: 'card',
        hint: 'Write some words in this, and send it to grandma. She will love it!'
    }
];

let correctWords = 0;
let totalWords = 0;

function wordRandomizer() {
    totalWords++;
    let random = Math.floor(Math.random() * 4);
    let wO = wordObject[random];
    wordBuilder.wordSplit(wO.word);
    console.log(`${divider}Your Hint: ${wO.hint}${divider}`);
    userInteraction();
};

function userInteraction() {
    let remainingGuesses = wordBuilder.remainingGuesses;
    let lg = wordBuilder.lettersGuessed;
    let lGLength = lg.length;
    let tempArray = [];
    wordBuilder.letterArray.map(x => {
        tempArray.push(x.guessed);
    });
    console.log(`${divider}Incorrect Guesses: ${lg.join()}${divider}`);
    console.log(`You have ${remainingGuesses - lGLength} guesses remaining\n`);
    if((remainingGuesses - lGLength) === 0) {
        console.log(`${divider}You didn't get this one.${divider}`);
        playAgain();
    } else if(!tempArray.includes(false)) {
        console.log(`${divider}Fantastic job! You got it!${divider}`);
        correctWords++;
        playAgain();
    } else {;
        inquirer.prompt([
            {
                type: 'input',
                message: 'Please guess a letter:',
                name: 'letterGuessed',
            }
        ]).then(res => {
            let output = res.letterGuessed;
            let length = output.length;
            let regex = /[a-z]/i;
            let test = regex.test(output);
            if(length === 1 && test === true) {
                output = output.toLowerCase();
                wordBuilder.letterGuess(output);
                userInteraction();
            } else {
                console.log(`${divider}You must enter a single letter to continue.${divider}`)
                userInteraction();
            };
        });
    };
};

function playAgain() {
    inquirer.prompt([
        {
        type: 'confirm',
        message: 'Would you like to play again?',
        name: 'playAgain'
        }
    ]).then(res => {
        if(res.playAgain === true) {
            wordRandomizer();
        } else {
            console.log(`${divider}Thanks for playing. You got ${correctWords} out of ${totalWords} words correct. We hope to see you again soon!${divider}`);
        };
    });
};

wordRandomizer();