const util = require('util');
const fs = require('fs');

const readFromFile = util.promisify(fs.readFile);

const writeToFile = (destination, content) => 
    fs.writeFile(destination, JSON.stringify(content, null, 4), (err) => err ? console.log(err) : console.info(`\nData written to ${destination}`));

const readAndAppend = (content, file) => {
    fs.readFile(file, 'utf8', (err, data) => {
        if(err) {
            console.log(err);
        } else {
            const parsedData = JSON.parse(data);
            parsedData.push(content);
            writeToFile(file, parsedData);
        }
    });
};

module.exports = { readFromFile, writeToFile, readAndAppend };