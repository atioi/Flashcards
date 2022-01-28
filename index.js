const http = require('http');


http.createServer((req, res) => {
    res.end('dsa');
}).listen(process.env.PORT || 8080);



