var express = require('express');
var app = express();
var port = process.env.PORT || 3000
var path = require('path')
app.use(express.static(path.join(__dirname, 'public')))
var fetch = require('node-fetch')

app.get('/', function(req, res) {
  fetch('http://heyhaha.codersonly.club?log=soondooboo', {method: 'POST'}).catch(error => console.error('Error:', error));
  res.redirect('/index.html');
});

app.listen(port, function() {
  console.log('Example app listening on port ' + port + '!');
});
