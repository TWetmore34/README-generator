// function runs the input string from answers.license in the index file to search for one of 4 options. the key for each will render out the badge link
function renderLicenseBadge(license) {
  const licenses = {
    'None': '',
    'Apahce License 2.0': '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]',
    'GNU General Public License v3.0': '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
    'MIT License': '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  }
  return licenses[license] ?? 'license not found';
}

// Works identically to above function, but returns the license link
function renderLicenseLink(license) {
  const licenses = {
    'None': '',
    'Apahce License 2.0': '(https://opensource.org/licenses/Apache-2.0)\n',
    'GNU General Public License v3.0': '(https://www.gnu.org/licenses/gpl-3.0)\n',
    'MIT License': '(https://opensource.org/licenses/MIT)\n'
  }
  return licenses[license] ?? 'License not found';
}

// renders the license section and all sections below it to eleminate extra whitespace that would otherwise appear
function renderLicenseSection(license, data) {
  // returns MD formatted without a license section
  if(license === 'None'){
    return `## Contribution Guidelines
  ${data.contribution} 

  ## Testing Instructions
  ${data.test}
  
  ## Questions
  Feel free to contact me by email: ${data.email} or by Github: ${data.username}`
  } 
  // returns MD formatted with a license section
  else {return `## License Link
  ${renderLicenseLink(data.license)} 
  ## Contribution Guidelines
  ${data.contribution} 

  ## Testing Instructions
  ${data.test}

  ## Questions
  Feel free to contact me by email: ${data.email} or by Github: ${data.username}`}
}
// Generates markedown for the index.js file to write as the readme
function generateMarkdown(data) {
  return `# ${data.title}   ${renderLicenseBadge(data.license)}
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

  ${renderLicenseSection(data.license, data)}`;
}
// exports file for use in index.js
module.exports = generateMarkdown;
