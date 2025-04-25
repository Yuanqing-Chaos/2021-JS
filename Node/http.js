// User request data to Server (Node/Express)
// Server response data to User

// HTTP responce status code: (200 OK), (400 Bad Request), (404 Not Found)...

// GET (default request)




const http = require("http");

const server = http.createServer((req, res) => {  // req and res will be used in http circle
    console.log(req.method);
    if (req.url === "/") {
        res.writeHead(200, {"content-type" : "text/html"});  // allow you to write html
        res.write('<h1> home page </h1>');
        res.end();  // always need to call end for responce
    } else if (req.url === "/gyq") {
        res.writeHead(200, {"content-type" : "text/html"});
        res.write('<h1> Hello GYQ! </h1>');
        res.end();
    } else {
        res.writeHead(404, {"content-type" : "text/html"});
        res.write('<h1> Page Not Found </h1>');
        res.end();
    }
})
server.listen(5001)  // the server is always listen to port 6666