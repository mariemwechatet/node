var http = require('http');
var server = http.createServer(function(res,req){
   
    res.writeHead(200, {'content-type':'text/plain'});
    res.readableEnded('hello');
});
server.listen(3000, '127.0.0.1');
console.log('hi , port 3000');