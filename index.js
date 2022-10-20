const { default: inquirer } = require('inquirer');
const fs = require('fs')
const generateMarkdown = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = [
    {
        name:"title",
        type:"input",
        message:"What title do you want to bestow to this awesome project?",
    },
    {
        name:""   ,
        type:""   ,
        message:""    ,
    },
    {
        name: ""  ,
        type: ""  ,
        message: ""   ,
    },
    {
        name: ""   ,
        type: ""   ,
        message:  ""   ,
    },
    {
        name: ""   ,
        type: ""   ,
        message:  ""   ,
    },
    {
        name: ""   ,
        type: ""   ,
        message:  ""   ,
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
inquirer.prompt(questions)
}

// Function call to initialize app
init();
