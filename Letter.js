
// TODO create constructor letter
// Constructor displays either a blank placeholder, or the letter if it has been guessed
// Boolean value that stores true/false depending on whether the letter has been guessed
// Function that returns the underlying char if the letter has been guessed, or a blank space
// Function that takes a character as an argument and checks it against the underlying char, and updates the boolean

const inquirer = require('inquirer');
class Letter {
    constructor(letter) {
        this.letter = letter,
        this.blank = '_',
        this.guessed = false,
        this.guessCheck = function(guess) {
            if(guess === firstLetter.letter) {
                firstLetter.guessed = true;
                this.charGuess();
            } else {
                this.charGuess();
            };
        };
        this.charGuess = function() {
            if(this.guessed === true) {
                console.log(firstLetter.letter);
            } else {
                console.log(firstLetter.blank);
            };
        };
    };
};

let firstLetter = new Letter(process.argv[2]);

(function guessPrompt() {
    inquirer.prompt([
        {
            type: 'input',
            message: "Guess a letter:",
            name: 'letterGuess',
        }
    ]).then(response => {
        firstLetter.guessCheck(response.letterGuess);
    });
})();