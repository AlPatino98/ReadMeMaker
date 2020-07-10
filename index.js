const fs = require("fs");
const inquirer = require("inquirer");

const writeFileAsync = fs.writeFile
// const appendFileAsync = fs.appendFile

// array of questions for user
const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "Title"
    },
    {
        type: "input",
        message: "Give a description about your project",
        name: "Description"
    },
    {
        type: "input",
        message: "What is the contents of the project?",
        name: "Table of contents"
    },
    {
        type: "input",
        message: "How do you use it?",
        name: "Usage"
    },
    {
        type: "input",
        message: "What have you contributed to the repo?",
        name: "Contributing"
    },
    {
        type: "input",
        message: "How does you test this project?",
        name: "Test"
    },
    {
        type: "input",
        message: "Any Questions?",
        name: "Questions"
    }
];

// function to write README file
// function writeToFile(fileName, data) {
//      fs.writeFile(path.join(proccess.cwd(), fileName), data);
//     fs.writeFile(filename(data, null, '\t'),
//     function(err) {
//         if (err) {
//           return console.log(err);
//         };
//     });
// }

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then((data) => {
        console.log(data);
        fs.writeFile(`README.md`,"utf8",({...data}))
    });
}

// function call to initialize program
init();
