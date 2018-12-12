var express = require('express');
var app = express();
var port = process.env.PORT || 3000

requests = []
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.post('/', function(req, res) {
  requests.push(req.query.log)
  res.send('')
});

app.get('/', function(req, res) {
  res.send('Scavenger Hunt Logs: ' + requests)
})

app.get('/clear', function(req, res) {
  requests = []
  res.redirect('/')
})

app.listen(port, function() {
  console.log('Example app listening on port ' + port + '!');
});
