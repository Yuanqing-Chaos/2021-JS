// Express.js is an useful framework for Node.js for Web Development
const express = require('express');
const app = express();

// method from express always used:
// app.get    - user read data
// app.post   - user insert data
// app.put    - user update data
// app.delete - user delete data
// app.all
// app.use
// app.listen

app.get("/", (req, res) => {
    res.send("Home page");
});

app.get("/gyq", (req, res) => {
    res.send("Hello GYQ");
});

app.all("*", (req, res) => {
    res.status(404).send("<h1> Incorrect </h1>");
});

app.listen(5001, () => {
    console.log("Server is listening on port 5001");
});

// setup middleware - app.use()
// setup static     - app.static(everything that won't be change through the program,
//                               root: index.html)
