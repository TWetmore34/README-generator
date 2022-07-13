// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// Creates an array of questions for user input
const questions = [{
    type: 'email',
    message: 'Enter your Github Email',
    name: 'email'
},{
    type: 'input',
    message: 'Enter your github username',
    name: 'username'
},{
    type: 'input',
    message: 'What is your project title?',
    name: 'title'
}, {
    type: 'input',
    message: 'Write your project description: ',
    name: 'desc'
}, {
    type: 'input',
    message: 'Write how to install the project: ',
    name: 'install'
}, {
    type: 'input',
    message: 'Write how to use the project: ',
    name: 'use'
}, {
    type: 'input',
    message: 'provide contribution guidelines: ',
    name: 'contribution'
}, {
    type: 'input',
    message: 'Provide testing instructions: ',
    name: 'test'
}, {
    type: 'list',
    message: 'which license would you like to include?',
    name: 'license',
    choices: ['Apahce License 2.0','GNU General Public License v3.0','MIT License', 'None'],
}
];

// Set up inquirer questions to be followed by writeToFile - this solves issues of synchronicity
inquirer.prompt(questions).then((response) => {
    writeToFile('README.md', response);
    
})

// writes README file using data from ./utils/generateMarkdown using the answers passed from inquirer.prompt
function writeToFile(fileName, answers) {
    fs.writeFileSync(fileName, generateMarkdown(answers), 
    (err => {if (err) throw err
    else{console.log('file written')}}))
}
// simply open the console and type npm run start or node index.js to create your README.md file!