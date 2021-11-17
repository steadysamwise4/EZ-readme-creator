const inquirer = require('inquirer');
const promptUser = require('./utils/questions');

promptUser().then(answers => console.log(answers));
// const fs = require('fs');
// const generateMarkdown = require('./utils/generateMarkdown');

// const pageMD = generateMarkdown(myName, github);

// const myName = 'Sam Davenport ';
// const github = 'steadysamwise4';




// fs.writeFile('README.md', generateMarkdown(pageMD), err => {
//     if (err) throw err;
  
//     console.log('Readme complete! Check out readme.md to see the output!');
//   });