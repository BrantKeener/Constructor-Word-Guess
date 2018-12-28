
module.exports = class Letter {
    constructor(letter) {
        this.letter = letter,
        this.blank = '_',
        this.guessed = false,
        this.guessCheck = function(guess) {
            if(guess === this.letter) {
                this.guessed = true;
            };
        };
        this.charGuess = function() {
            if(this.guessed === true) {
                return this.letter;
            } else {
                return this.blank;
            };
        };
    };
};


//Module test. Commented out if module is running correctly.
// const inquirer = require('inquirer');
// let firstLetter = new Letter(process.argv[2]);

// (function guessPrompt() {
//     inquirer.prompt([
//         {
//             type: 'input',
//             message: "Guess a letter:",
//             name: 'letterGuess',
//         }
//     ]).then(response => {
//         firstLetter.guessCheck(response.letterGuess);
//     });
// })();