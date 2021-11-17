const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

const myName = 'Sam Davenport ';
const github = 'steadysamwise4';




fs.writeFile('README.md', generateMarkdown(myName, github), err => {
    if (err) throw err;
  
    console.log('Readme complete! Check out readme.md to see the output!');
  });