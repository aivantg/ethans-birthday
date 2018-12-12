// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = process.env.sid;
const authToken = process.env.auth;
const client = require('twilio')(accountSid, authToken);
const express = require('express')
var app = express();
var port = process.env.PORT || 3000
var fetch = require('node-fetch')

app.get('/hints.html', function(req, res) {
  res.sendFile('hints.html', {root: __dirname })
});

app.get('/', function(req, res) {
  fetch('http://heyhaha.codersonly.club?log=call', {method: 'POST'}).catch(error => console.error('Error:', error));
  if (req.query.number) {
    call(req.query.number, res)
  } else {
    res.send("Aww, can you give me your ?number= please?")
  }

});

app.post('/clue.xml', function(req, res) {
  res.sendFile('clue.xml', {root: __dirname})
}
);

app.listen(port, function() {
  console.log('Example app listening on port ' + port + '!');
});

function call(number, res) {
  try {
    client.calls
          .create({
             url: 'http://nerd.codersonly.club/clue.xml',
             from: '+15106613277',
             to: '+1' + number
           })
          .then(call => res.send("Call you maybe?"))
          .catch(err => { console.log(err); res.send("aww, I don't have that number");})
          .done();
  } catch (error) {
    console.log("Sad")
  }
};
