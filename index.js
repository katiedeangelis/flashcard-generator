var importedBasicCard = require('./basicCard.js');
var importedClozeCard = require('./clozeCard.js');
var inquirer = require("inquirer");
var basicFlashcardArray = [];
var clozeFlashcardArray = [];
var basicCount = 0;
var clozeCount = 0;

switch (process.argv[2]) {
    case "basic":
        createBasicCard();
        break;
    case "cloze":
        createClozeCard();
        break;
    default:
        console.log("That was not a valid choice. Please select 'basic', 'cloze', or 'flashcards' to continue.");
        break;
}

function createBasicCard() {
    console.log("Basic test")
    if (basicCount < 1) {
        inquirer.prompt([{
            name: "front",
            message: "Front of flashcard (question):"
        }, {
            name: "back",
            message: "Back of flashcard (answer):"
        }]).then(function (answers) {
            var newBasicFlashcard = new importedBasicCard(answers.front, answers.back);
            basicFlashcardArray.push(newBasicFlashcard);
            basicCount++
            createBasicCard();
        })
    } else {
        console.log(basicFlashcardArray)
    }
}

function createClozeCard() {
    if (clozeCount < 1) {
        inquirer.prompt([{
            name: "fullText",
            message: "What is the full text of the flashcard?:"
        }, {
            name: "cloze",
            message: "What is the cloze text?:"
        }]).then(function (answers) {
            var newClozeFlashcard = new importedClozeCard(answers.fullText, answers.cloze);
            clozeFlashcardArray.push(newClozeFlashcard);
            clozeCount++
            createClozeCard();
        })
    } else {
        console.log(clozeFlashcardArray);        
    }
}