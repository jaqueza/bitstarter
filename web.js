var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());
var tmp = fs.readFileSync('index.html');
var buf = new Buffer(tmp, 'utf8');

app.get('/', function(request, response) {
  response.send(buf.toString('utf8',0, tmp.length));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
