// TODO: Include packages needed for this application
import {writeFile} from 'fs/promises';
import inquirer from 'inquirer';
const {prompt} = inquirer;
import readmeGen from './readmeGen.js'
import { type } from 'os';

// TODO: Create an array of questions for user input
const questions =  [
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?'
        },
        {
            type: 'input',
            name: 'motivation',
            message: 'What was your motivation?',
        },
        {
            type: 'input',
            name: 'project',
            message: 'Why did you build this project?',
        },
        {
            type: 'input',
            name: 'problem',
            message: 'What problem does it solve?',
        },
        {
            type: 'input',
            name: 'learn',
            message: 'What did you learn?',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the steps required to install your project?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and examples for use.'
        },
        {
            type: 'input',
            name: 'credits',
            message: 'List your collaborators, if any, with links to their GitHub profiles. If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.'
        },
        {
            type: 'input',
            name: 'test',
            message: 'Go the extra mile and write tests for your application. Then provide examples on how to run them here.'
        },
        


    ];

    const userInput = () => {
        prompt(questions).then((answers) => {
            const readmeText = readmeGen(answers);
            console.log(readmeText);
        });
    };

    userInput();

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
