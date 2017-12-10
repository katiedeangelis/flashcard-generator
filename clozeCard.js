var inquirer = require("inquirer");

function ClozeCard(fullText, cloze) {
    this.cloze = cloze;
    this.fullText = fullText;
    if (this.fullText.indexOf(this.cloze) === -1) {
        console.error("The cloze deletion you entered does not appear in the full text.")
    } else {
        this.partial = this.fullText.replace(this.cloze, "...")
    }
}

module.exports = ClozeCard;