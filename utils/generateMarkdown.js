
const renderLicense = licenseText => {
    if (licenseText === 'None') {
        return '';
    }
    return `![license badge](https://img.shields.io/badge/License-${licenseText}-<green>)`
}

const renderLicenseLink = licenseText => {
    if (licenseText === 'None') {
        return `${licenseText}`;
    }
    if (licenseText === 'CC') {
        return `[${licenseText}](https://creativecommons.org/licenses/by/4.0/)`;
    }
    if (licenseText === 'BSD') {
        return `[${licenseText}](https://opensource.org/licenses/BSD-3-Clause)`;
    }
    if (licenseText === 'MIT') {
        return `[${licenseText}](https://opensource.org/licenses/MIT)`;
    }
    if (licenseText === 'APACHE') {
        return `[${licenseText}](https://opensource.org/licenses/Apache-2.0)`;
    }
}

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

## Description <a name="description"></a>
${description}

## Installation <a name="installation"></a>
${instructions}

## Usage <a name="usage"></a>
${usage}
![${altText}](${screenShot})

## License <a name="license"></a>
${renderLicenseLink(license)}

## Contributing <a name="contributing"></a>
[Contributing Guidelines](${contribute})

## Tests <a name="tests"></a>
N/A at this time

## Questions <a name="questions"></a>
Contact: ${name} </br>
https://github.com/${username} </br>
${email}
    
`;   
};

