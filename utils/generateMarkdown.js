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
const generateMarkdown = (name, github) => {
return`
# ${name}

## ${github}
    
With this node.js application, you can easily generate
an excellent readme.md by answering a few questions in
the command line.
    
* Introduction
* Instructions
* Links
* Demonstration Video`;

    
};

module.exports = generateMarkdown;