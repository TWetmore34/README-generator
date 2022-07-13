// what are licenses in this situation? I know theres a standard set of a few of them, but im not really sure what they are or where theyd go in a readme

// otherwise tho, we just set a switch statement to check which license was chosen, and return each of them accordingly. Then we place the callback functions in the MD and were done!

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license){
    case 'None':
      break;
    case 'Apahce License 2.0':
      return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]';
      break;
    case 'GNU General Public License v3.0':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
      break;
    case 'MIT License':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
      break;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license){
    case 'None':
      break;
    case 'Apahce License 2.0':
      return '(https://opensource.org/licenses/Apache-2.0)';
      break;
    case 'GNU General Public License v3.0':
      '(https://www.gnu.org/licenses/gpl-3.0)';
      break;
    case 'MIT License':
      return '(https://opensource.org/licenses/MIT)';
      break;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch(license){
    case 'None':
      break;
    case 'Apahce License 2.0':
      console.log('Apahce License 2.0');
      return `## License`
      break;
    case 'GNU General Public License v3.0':
      console.log('GNU General Public License v3.0');
      return `## License`
      break;
    case 'MIT License':
      console.log('MIT License');
      return `## License`
      break;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}   ${renderLicenseBadge(data.license)}
  ${data.desc}
  
  ## Table of Contents
  1. [Installation](#project-installation)
  2. [Usage](#project-use)
  3. [License](#project-license)
  4. [Contributing](#contribution-guidelines)
  5. [Tests](#testing-instructions)
  6. [Questions](#(questions))
  
  ## Project installation
  ${data.install} 
  ## Project Use
  ${data.use}
 ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}
  ## Contribution Guidelines
  ${data.contribution} 
  ## Testing Instructions
  ${data.test}
  ## Questions
  Feel free to contact me by email: ${data.email} or by Github: ${data.username}`;
}

module.exports = generateMarkdown;
