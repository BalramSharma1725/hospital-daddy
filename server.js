const http = require('http');
const fs = require('fs');

var port = 5099;

http.createServer((req, res)=>{
    res.writeHead(200,"content-type","text/html");
    var readStream = fs.createReadStream('index.html');
    readStream.pipe(res);
}).listen(port);

console.log('The server is running on port 5099');