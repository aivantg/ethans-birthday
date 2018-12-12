var express = require('express');
var app = express();
var port = process.env.PORT || 3000
var fetch = require('node-fetch')
const url = require('url');

levels = ['01110100', '01111001', '01110000', '01100101', '01110010'].reverse()

app.get('/hints.html', function(req, res) {
  res.sendFile('hints.html', {root: __dirname })
});
app.get('/1', function(req, res) {
  step = req.query.step
  level = req.query.level
  if(step != null && level != null){
    step = parseInt(step)
    level = parseInt(level)
    next = levels[level][step]
    if (next) {
      res.redirect(url.format({pathname: '/' + next, query: {'level': level, 'step': step+1}}));
    }else {
      if (level == 0) {
        res.redirect('redirectsmakemedizzy')
      }else {
        res.redirect('fin')
      }
    }
  } else {
    res.redirect('redirectsmakemedizzy')
  }
});

app.get('/0', function(req, res) {
  step = req.query.step
  level = req.query.level
  if(step != null && level != null){
    step = parseInt(step)
    level = parseInt(level)
    next = levels[level][step]
    if (next) {
      res.redirect(url.format({pathname: '/' + next, query: {'level': level, 'step': step+1}}));
    }else {
      if (level == 0) {
        res.redirect('redirectsmakemedizzy')
      }else {
        res.redirect('fin')
      }
    }
  } else {
    res.redirect('redirectsmakemedizzy')
  }
});

app.get('/fin', function(req, res) {
  res.sendFile('index.html', { root: __dirname })
})

app.get('/redirectsmakemedizzy', function(req, res) {
  res.redirect('redirectsmakemedizzy')
})

app.get('/', function(req, res) {
  fetch('http://heyhaha.codersonly.club?log=dizzy', {method: 'POST'}).catch(error => console.error('Error:', error));
  res.redirect('first');
});

app.get('/first', function(req, res) {
  res.redirect(url.format({pathname: '/' + levels[0][0], query: {'level': 0, 'step': 1}}));
});

app.get('/second', function(req, res) {
  res.redirect(url.format({pathname: '/' + levels[1][0], query: {'level': 1, 'step': 1}}));
});

app.get('/third', function(req, res) {
  res.redirect(url.format({pathname: '/' + levels[2][0], query: {'level': 2, 'step': 1}}));
});

app.get('/fourth', function(req, res) {
  res.redirect(url.format({pathname: '/' + levels[3][0], query: {'level': 3, 'step': 1}}));
});

app.get('/fifth', function(req, res) {
  res.redirect(url.format({pathname: '/' + levels[3][0], query: {'level': 4, 'step': 1}}));
});

app.get('/sixth', function(req, res) {
  res.send("suoivbo eb dluohs eulc ehT");
});




app.listen(port, function() {
  console.log('Example app listening on port ' + port + '!');
});
