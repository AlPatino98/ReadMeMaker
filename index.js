const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");

const generateMarkdown = require("./generateMarkdown");

const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title"
    },
    {
        type: "input",
        message: "Give a description about your project",
        name: "description"
    },
    {
        type: "input",
        message: "How do you use it?",
        name: "usage"
    },
    {
        type: "input",
        message: "What have you contributed to the repo?",
        name: "contributing"
    },
    {
        type: "input",
        message: "How do you test this project?",
        name: "test"
    },
    {
        type: "input",
        message: "Any Questions?",
        name: "questions"
    },
    {
        type: "input",
        message: "Who licenced this?",
        name: "license"
    }
];

// function to write README file
function writeToFile(data) {
    return writeFileAsync("README.md",generateMarkdown(data))
}


// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then((data) => {
        console.log(data);
       writeToFile(data)
    });
}

// function call to initialize program
init();
