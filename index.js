var importedBasicCard = require('./basicCard.js');
var importedClozeCard = require('./clozeCard.js');
var inquirer = require("inquirer");
var basicFlashcardArray = [];

switch (process.argv[2]) {
    case "basic":
        var count = 0;

        var createBasicCard = function () {
            if (count < 2) {
                inquirer.prompt([{
                    name: "front",
                    message: "Front of flashcard (question):"
                }, {
                    name: "back",
                    message: "Back of flashcard (answer):"
                }]).then(function (answers) {
                    var newBasicFlashcard = new importedBasicCard(answers.front, answers.back);
                    basicFlashcardArray.push(newBasicFlashcard);
                    count++
                    createBasicCard();
                })
            }
        }

        createBasicCard();
        break;
    case "cloze":
        importedClozeCard();
        break;
    case "flashcards":
        console.log("This will run the flash cards");
        break;
    default:
        console.log("That was not a valid choice. Please select 'basic', 'cloze', or 'flashcards' to continue.");
        break;
}