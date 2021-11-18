const inquirer = require("inquirer");


const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name? (Required)'
        },
        {
            type: 'input',
            name: 'username',
            message: 'What is your github username? (Required)'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address: (Required)'
        },
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project? (Required)'
        },
        {
            type: 'checkbox',
            name: 'languages',
            message: 'What did you build this project with? (Check all that apply)',
            choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please enter a detailed description of the project: (Required)'
        },
        {
            type: 'input',
            name: 'instructions',
            message: 'Provide instructions for user installation:'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions for use:'
        },
        {
            type: 'input',
            name: 'altText',
            message: 'Please enter alt text for the screen shot:'
        },
        {
            type: 'input',
            name: 'screenShot',
            message: 'Please enter a file path for a screen shot:'
        },
        {
            type: 'list',
            name: 'license',
            message: 'Please choose a license:',
            choices: ['BSD', 'MIT', 'CC', 'APACHE', 'None']
        },
        {
            type: 'input',
            name: 'contribute',
            message: 'Please list any references here:'
        },
        
    ]);
};

module.exports = promptUser;