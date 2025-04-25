// HTTP built-in module,
const http = require("http");

// npm: node package manager
// search for package from other developer and install and use
//     npm i <packageName>               : local dependency (use only in this project)
//     sudo npm install -g <packageName> : global dependency (use globally)
// all dependency will go into folder "node_modules"

// package.json: manifest file (store important info about project)
//     npm init    : step by step, press enter to skip
//     npm init -y : everything default
// manifest can check with dependency and version

// .gitignore: ignore the file in this file when upload to github
// run 'npm install' to install those modules

// use -D to install devDependency, such as 'nodemon'

// Event Loop: offload time-consuming job, and do the immediate job first
// Example: Async read/write fild
// Another Example: setTimeout() is Async, which will offload
console.log("first")
setTimeout(() => {
    console.log("second")  // This will print out last
}, 0)
console.log("third")

// Async Pattern: how to write Async code with compact format

// EventEmitter
const EventEmitter = require('events')
const customEmitter = new EventEmitter()

customEmitter.on("responce", () => {  // listen to the event "responce" (can take in parameter)
    console.log("data received")
})
customEmitter.emit("responce")  // now, emit the responce to the listener (can bring parameter)

// Streamer: read/write data sequentially with buffer(64KB in default)
