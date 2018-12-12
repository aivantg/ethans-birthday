fetch('http://heyhaha.codersonly.club?log=typers', {method: 'POST'}).catch(error => console.error('Error:', error));
function validate() {
  fetch('/latestScore').then(response => {
    return response.json();
  }).then(data => {
    console.log(data)
    lastScore = Math.floor(data.score)
    if (lastScore >= 135) {
      document.getElementById('challenge2').innerHTML = "What a worthy typer. Your Clue is " + data.clue
    } else {
      document.getElementById('challenge2').innerHTML = lastScore + " WPM isn't good enough!"
    }
  }).catch(err => {
    // Do something for an error here
  });
}
