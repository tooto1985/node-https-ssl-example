var https = require("https");
var fs = require("fs");
var options = {
  key: fs.readFileSync('yourkey.pem'),
  cert: fs.readFileSync('yourcert.pem')
};
https.createServer(options, function(request, response) {
  response.writeHead(200);
  response.end("Hello World!");
}).listen(443);