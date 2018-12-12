var express = require('express');
var app = express();
var path = require('path')
var port = process.env.PORT || 3000
var fetch = require('node-fetch')
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', function(req, res) {
  res.redirect('/index.html')
});

app.get('/racetrack', function(req, res) {
  res.redirect('https://play.typeracer.com?rt=18dncwfwvv')
})

app.get('/latestScore', function (req, res) {
  fetch('https://data.typeracer.com/users?id=tr:ethanlee16').then(response => {
    return response.json();
  }).then(data => {
    lastScore = data.tstats.recentScores.pop()
    data = {score: lastScore }
    lastScore = Math.floor(lastScore)
    if (lastScore >= 135) {
      data.clue = "coders"
    }
    res.send(JSON.stringify(data))
  }).catch(err => {
    console.log("Sad")
    console.log(err)
    res.send(JSON.stringify({score: 0}))
  });
})

app.listen(port, function() {
  console.log('Example app listening on port ' + port + '!');
});
