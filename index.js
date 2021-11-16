const fs = require('fs');

const myName = 'Sam Davenport';
const github = 'steadysamwise4';

const generatePage = (name, github) => {
    return `
    #${name}

    ##${github}
    
    With this node.js application, you can easily generate
    an excellent readme.md by answering a few questions in
    the command line.
    
    * Introduction
    * Instructions
    * Links
    * Demonstration Video`;

    
};


fs.writeFile('README.md', generatePage(myName, github), err => {
    if (err) throw err;
  
    console.log('Readme complete! Check out readme.md to see the output!');
  });