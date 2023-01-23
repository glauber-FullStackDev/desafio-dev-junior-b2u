const app = require('./src/app.js');
const http = require('http');
const conf = require('config');

const port = 3001;

app.set('port', port);

const server = http.createServer(app);

server.listen(port);

console.log('Running on port ' + port);
