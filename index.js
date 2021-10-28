// Assignment: ReadME Generator project 
// Author: Taoufik Ammi
// Date: 10/27/2021 
// Course: UNC Coding BootCamp



// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
    {
        // Title of the project
        name: 'title',
        type: 'input',
        message: 'What is the title of the project?'
    },
    {
        // Description of Project
        name: 'description',
        type: 'input',
        message: 'Provide a description of your project?'
    },
    {
        // Technologies used.
        name: 'dependencies',
        type: 'input',
        message: 'What technologies did the application use?'
    },

    {
        // What is it for?
        name: 'use',
        type: 'input',
        message: 'What is the purpose of this application? '
    },
    {
        // Who contributed
        name: 'contributor',
        type: 'input',
        message: 'Who contributed to build this app?'
    },
    
    {
        // Any license
        name: "license",
        type: 'input',
        message: 'What is the license used for this app if there is any? '

    },

    {
        name: 'test',
        type: 'input',
        message: "How do you test the functionality of this app? "
    },
    {
        // Github
        name: 'github',
        type: 'input',
        message: "What is your Github?"
    },
    {
        // Email
        name: 'email',
        type: 'input',
        message: "Have any questions? What is your email?"
    }
];

// TODO: Create a function to write README file
const writeFile = (fileName, data) => {
    fs.writeFile(fileName, data, function(err) {
        // console.log(fileName),
        console.log(data.github),
        err ? console.log(err) : console.log("README.md has been created")
    })
}

// TODO: Create a function to initialize app
const init = () => {
    inquirer.prompt(questions)
        .then(function(data) {
            writeFile("README.md", generateMarkdown(data));
            console.log(data)
        })
}

// Function call to initialize app
init();