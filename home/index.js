var express = require('express');
var app = express();
var port = process.env.PORT || 3000

app.get('/', function(req, res) {
  var date = new Date()
  console.log(date)
  var utcDate = new Date(date.toUTCString());
  utcDate.setHours(utcDate.getHours()-8);
  date = new Date(utcDate);
  console.log(date)
  console.log(date.getHours())
  console.log(date.getMinutes())
  res.sendFile('index2.html', {root: __dirname});
});

app.listen(port, function() {
  console.log('Example app listening on port ' + port + '!');
});
