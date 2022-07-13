// ok so the things im still struggling with (for office hours)
// how to format the js so the md comes out right- ik literals are great for that, and i think ill be using \n a lot, but im not sure if theres an easier way. especially considering fs.writefile only has one parameter for data, so all of it has to be passed at once?

// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
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
    type: 'checkbox',
    message: 'which license would you like to include?',
    name: 'license',
    choices: ['l1','l2','l3'],
    checked: true
}
];
// i need to place these responses into a md format, then pass that as my data
inquirer.prompt(questions).then((response) => {
    writeToFile('README.md', response);
})

// TODO: Create a function to write README file
function writeToFile(fileName, answers) {
    // title will look smth like this
    // same w other headers/descriptions
    
    fs.writeFileSync(fileName, generateMarkdown(answers), 
    (err => {if (err) throw err
    else{console.log('file written')}}))
    
}


// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
