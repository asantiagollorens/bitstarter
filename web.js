var express = require('express');
var fs = require('fs');
var data = fs.readFileSync("index.html");
var buffer = new Buffer(data);
var string = buffer.toString();

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    console.log(data + " --- " + buffer + " --- " + string);
  response.send(string);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
