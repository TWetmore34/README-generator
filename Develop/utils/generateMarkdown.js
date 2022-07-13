// what are licenses in this situation? I know theres a standard set of a few of them, but im not really sure what they are or where theyd go in a readme

// otherwise tho, we just set a switch statement to check which license was chosen, and return each of them accordingly. Then we place the callback functions in the MD and were done!

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
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
  ## Project License
  
  ## Contribution Guidelines
  ${data.contribution} 
  ## Testing Instructions
  ${data.test}
  ## Questions
  Feel free to contact me by email: ${data.email} or by Github: ${data.username}`;
}

module.exports = generateMarkdown;
