const inquirer = require('inquirer');
const fs = require('fs')
const generateMarkdown = require("./utils/generateMarkdown")

// Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
const answers = [
    {
        name: "title",
        type: "input",
        message: "What title do you want to bestow on this project?",
    },
    {
        name: "description",
        type: "input",
        message: "Can you give me a brief description of your project?",
    },
    {
        name: "installation",
        type: "input",
        message: "How do you install this project?",
    },
    {
        name: "usage",
        type: "input",
        message: "How do you use this project?",
    },
    {
        name: "license",
        type: "list",
        message: "What license do you want to use?",
        choices: ["MIT", "IBM", "APACHE 2.0", "None"]
    },
    {
        name: "contributors",
        type: "input",
        message: "Who contributed to this project? Are others allowed to contribute?",
    },
    {
        name: "test",
        type: "input",
        message: "What are the testing guidelines?",
    },
    {
        name: "questions",
        type: "input",
        message: "What is your github username and email for more information?",
    },


];

function init() {

    inquirer.prompt(answers)
        .then(data => {
            console.log(data)
            fs.writeFileSync("./tests/README.md", generateMarkdown(data))
        });

};


init();
