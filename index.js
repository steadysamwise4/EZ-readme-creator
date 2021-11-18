// const inquirer = require('inquirer');
const promptUser = require('./utils/questions');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('README.md', fileContent, err => {
            // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
            if (err) {
                reject(err);
                // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
                return;
            }

            // if everything went well, resolve the Promise and send the successful data to the `.then()` method
            resolve({
                ok: true,
                message: "Your file is written! ... You're welcome."
            });
        });
    });
};

promptUser().then(answers => {
    return generateMarkdown(answers);
})
.then(pageMD => {
    return writeFile(pageMD)
}).then(writeFileResponse => {
    console.log(writeFileResponse.message);
}).catch(err => {
    console.log(err);
});


// const generateMarkdown = require('./utils/generateMarkdown');

// const pageMD = generateMarkdown(answers);

// const myName = 'Sam Davenport ';
// const github = 'steadysamwise4';


// fs.writeFile('README.md', generateMarkdown(pageMD), err => {
//     if (err) throw err;
  
//     console.log('Readme complete! Check out README.md to see the output!');

