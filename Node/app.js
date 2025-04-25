// __dirname  - path to current directory
// __filename - file name
// require    - function to use modules
// module     - info about current module (exports!!!)
// process    - info about env where the program is being executed

// Modules - Encapsulated Code 
// Every file is a module
// Node.js has a lot of built-in Modules

// OS built-in module: interact with operating system
const os = require('os');  // get all shared code from OS module
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
};
console.log(currentOS);

console.log("--------------------------------------");

// PATH built-in module, method with file path
const path = require('path');
console.log(path.resolve(__dirname, "app.js"));  // return absolute path

console.log("--------------------------------------");

// FS built-in module, method with file read and write
const {readFileSync, writeFileSync} = require('fs');  // Sync version: Everything happens one by one
console.log(readFileSync('./test.txt', 'utf8'));
writeFileSync('./test.txt', ' I will try my best to work on it', {flag: 'a'});
console.log(readFileSync('./test.txt', 'utf8'))

const{readFile, writeFile} = require('fs');  // Async version: one node will do the r/w, other will comtinue process other code
readFile("./test.txt", 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }  // this is the callback for error
    const content = result;
    writeFile("./test_copy.txt", result, (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log(result);
    });
});
// 

