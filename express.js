var https = require("https");
var fs = require("fs");
var options = {
  key: fs.readFileSync('yourkey.pem'),
  cert: fs.readFileSync('yourcert.pem')
};
var express = require("express");
var app = express();
app.get("/", function(req, res) {
   res.send("Hello World!");
});
https.createServer(options,app).listen(443);