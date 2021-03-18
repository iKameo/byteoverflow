const http = require('http');

const _hostname = '127.0.0.1';
const _port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World\n');
});

server.listen(_port, _hostname, () => {
    console.log(`Server running at http://${_hostname}:${_port}/`);
});