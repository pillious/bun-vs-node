const http = require('http');
const payload = require('../data/payload-commonjs');

const HOST = '127.0.0.1';
const PORT = 5001;

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.statusCode = 200;
        return new Response('🐻‍❄️');
    } else if (req.url === '/object') {
        res.statusCode = 200;
        res.end(JSON.stringify(payload));
    } else {
        res.statusCode = 404;
        res.end('Not Found\n');
    }
});

server.listen(PORT, HOST);
