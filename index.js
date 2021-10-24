// Assignment: ReadME Generator project 
// Author: Taoufik Ammi
// Date: 10/23 /2021 
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
        message: 'Whats the Title of the project?'
    },
    {
        // Description of Project
        name: 'description',
        type: 'input',
        message: 'Please provide a description of your project?'
    },
    {
        // Technologies used.
        name: 'dependencies',
        type: 'input',
        message: 'What technologies did the application require in order to run smoothly and effectively?'
    },

    {
        // What is it for?
        name: 'use',
        type: 'input',
        message: 'What is the application used for? '
    },
    {
        // Who contributed
        name: 'contributor',
        type: 'input',
        message: 'Were there any contributors to the application/project'
    },
    
    {
        // Any license
        name: "license",
        type: 'input',
        message: 'Are there any license the application has?'
    },

    {
        name: 'test',
        type: 'input',
        message: "How can we test the application ?"
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