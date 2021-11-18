// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicense = licenseText => {
    if (licenseText === 'None') {
        return '';
    }

    return `![license badge](https://img.shields.io/badge/<License>-<${licenseText}>-<green>)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
module.exports = templateData => {
const { name, username, email, title, languages, description, instructions, usage, altText, screenShot, license, contribute } = templateData;

return`
# ${title}   ${renderLicense(license)}
<sub>_***Built With***_</sub>  </br>       
<sub>${languages}</sub>

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

### Description <a name="description"></a>
${description}

### Installation <a name="installation"></a>
${instructions}

### Usage <a name="usage"></a>
${usage}
![${altText}](${screenShot})

### License <a name="license"></a>
${license}

### Contributing <a name="contributing"></a>
${contribute}

### Tests <a name="tests"></a>
N/A at this time

### Questions <a name="questions"></a>
Contact: ${name} </br>
https://github.com/${username} </br>
${email}
    
`;

    
};

