const http = require('http');

const server = http.createServer((req, res) => {
    res.write("Hello from Node Docker App");
    res.end();
});

server.listen(8080);
