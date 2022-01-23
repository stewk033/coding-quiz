// VIEW HIGH SCORE LINK
var aViewHighScores = document.getElementById('high-score');

// SECTIONS
var secIntro = document.getElementById('intro');
var secQuiz = document.getElementById('quiz');
var secEnding = document.getElementById('ending');
var secHighScores = document.getElementById('high-score-view');

// QUIZ ELEMENTS
var h1 = document.getElementById('quiz-question');
var quizList = document.getElementById('quiz-list');
var pResult = document.querySelector('.result');

// ENDING ELEMENT
var spnScore = document.getElementById('score');
var form = document.getElementById('form');
var initials = document.getElementById('initials');
var buttons = document.querySelector('.buttons');

// HIGH SCORES
var btnGoBack = document.getElementById('go-back');
var btnClear = document.getElementById('clear');
var olHighScores = document.getElementById('high-scores');

var btnStart = document.getElementById('btnStart');
var spnClock = document.getElementById('clock');

var interval;
var time = 100;
var i = 0;

var clearHighScoresHandler = function() {
    localStorage.setItem('highScores', '');
    displayHighScores();
};

var displayHighScores = function() {
    var strHighScores = localStorage.getItem('highScores');
  
    olHighScores.innerHTML = '';
    var li;
    if (!strHighScores) {
      li = document.createElement('li');
      li.className = 'high-scores';
      li.textContent = `No new scores to display!`;
      olHighScores.appendChild(li);
    } else {
      var highScores = JSON.parse(strHighScores);
      for (var i = 0; i < Math.min(highScores.length, 10); i++) {
        li = document.createElement('li');
        li.className = 'high-scores';
        li.textContent = `${highScores[i].initials} - ${highScores[i].score}`;
        olHighScores.appendChild(li);
        }
    }
};


secQuiz.onclick = quizClickHandler;
btnStart.onclick = btnStartHandler;
form.onsubmit = frmHighScoreSubmitHandler;
btnGoBack.onclick = goBackHandler;
btnClear.onclick = clearHighScoresHandler;
aViewHighScores.onclick = transitionToHighScores;