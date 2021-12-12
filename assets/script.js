var timerEl = document.querySelector(".timer")
var highscoreEl = document.querySelector(".highscore")
var headingEl = document.querySelector("#heading")
var questionEl = document.querySelector("#question")
const spacer2El = document.querySelector("#spacer2")
const startEl = document.querySelector("#start")
var score = 0;
var finalScore
const questionOrder = [ startQuestion2, startQuestion3, startQuestion4, startFinish]
var round = 0;
var time = 0;
let intervalID;


startEl.addEventListener("click", startQuiz);
startEl.addEventListener("click", startTimer);

spacer2El.addEventListener("click", nextQuestion);


function startQuiz() {
  round = 0;
  score = 0;
  finalScore = 0;
  spacer2El.innerHTML = '';
  highscoreEl.textContent= "Score = " + score;

  headingEl.textContent = "Question 1";
  questionEl.textContent = "What is a syntax error?"
  startEl.remove()

  var buttonEl = document.createElement("p")
  buttonEl.innerHTML = "A grammatical error in programming"
  buttonEl.setAttribute("id", "answer1",)
  buttonEl.setAttribute("class", "pbutton")
  buttonEl.dataset.correct = "true"
  spacer2El.append(buttonEl)

  var buttonEl = document.createElement("p")
  buttonEl.innerHTML = "A random computer bug"
  buttonEl.setAttribute("id", "answer2")
  buttonEl.setAttribute("class", "pbutton")
  buttonEl.dataset.correct = "false"
  spacer2El.append(buttonEl)

  var buttonEl = document.createElement("p")
  buttonEl.innerHTML = "A compiling error"
  buttonEl.setAttribute("id", "answer3")
  buttonEl.setAttribute("class", "pbutton")
  buttonEl.dataset.correct = "false"
  spacer2El.append(buttonEl)

  var buttonEl = document.createElement("p")
  buttonEl.innerHTML = "A hearty soup"
  buttonEl.setAttribute("id", "answer4")
  buttonEl.setAttribute("class", "pbutton")
  buttonEl.dataset.correct = "false"
  spacer2El.append(buttonEl)

}

function startQuestion2() {  
round = round + 1;
headingEl.textContent = "Question 2";
questionEl.textContent = "Which of the following means identical type and content?"

var buttonEl = document.createElement("p")
buttonEl.innerHTML = "i++"
buttonEl.setAttribute("id", "answer1",)
buttonEl.setAttribute("class", "pbutton")
buttonEl.dataset.correct = "false"
spacer2El.append(buttonEl)

var buttonEl = document.createElement("p")
buttonEl.innerHTML = "="
buttonEl.setAttribute("id", "answer2")
buttonEl.setAttribute("class", "pbutton")
buttonEl.dataset.correct = "false"
spacer2El.append(buttonEl)

var buttonEl = document.createElement("p")
buttonEl.innerHTML = "!=="
buttonEl.setAttribute("id", "answer3")
buttonEl.setAttribute("class", "pbutton")
buttonEl.dataset.correct = "false"
spacer2El.append(buttonEl)

var buttonEl = document.createElement("p")
buttonEl.innerHTML = "==="
buttonEl.setAttribute("id", "answer4")
buttonEl.setAttribute("class", "pbutton")
buttonEl.dataset.correct = "true"
spacer2El.append(buttonEl)

}

function startQuestion3() {  
    round = round + 1;
    headingEl.textContent = "Question 3";
    questionEl.textContent = "Which of the following is not a data type?"
    
    var buttonEl = document.createElement("p")
    buttonEl.innerHTML = "numeral"
    buttonEl.setAttribute("id", "answer1",)
    buttonEl.setAttribute("class", "pbutton")
    buttonEl.dataset.correct = "false"
    spacer2El.append(buttonEl)
    
    var buttonEl = document.createElement("p")
    buttonEl.innerHTML = "array"
    buttonEl.setAttribute("id", "answer2")
    buttonEl.setAttribute("class", "pbutton")
    buttonEl.dataset.correct = "true"
    spacer2El.append(buttonEl)
    
    var buttonEl = document.createElement("p")
    buttonEl.innerHTML = "string"
    buttonEl.setAttribute("id", "answer3")
    buttonEl.setAttribute("class", "pbutton")
    buttonEl.dataset.correct = "false"
    spacer2El.append(buttonEl)
    
    var buttonEl = document.createElement("p")
    buttonEl.innerHTML = "boolean"
    buttonEl.setAttribute("id", "answer4")
    buttonEl.setAttribute("class", "pbutton")
    buttonEl.dataset.correct = "false"
    spacer2El.append(buttonEl)
        
    }

 function startQuestion4() {  
    round = round + 1;
    headingEl.textContent = "Question 4";
    questionEl.textContent = "Which of the following can be used to hide content in css?"
        
    var buttonEl = document.createElement("p")
    buttonEl.innerHTML = "opacity:0"
    buttonEl.setAttribute("id", "answer1",)
    buttonEl.setAttribute("class", "pbutton")
    buttonEl.dataset.correct = "false"
    spacer2El.append(buttonEl)
        
    var buttonEl = document.createElement("p")
    buttonEl.innerHTML = "display:hidden"
    buttonEl.setAttribute("id", "answer2")
    buttonEl.setAttribute("class", "pbutton")
    buttonEl.dataset.correct = "false"
    spacer2El.append(buttonEl)
        
    var buttonEl = document.createElement("p")
    buttonEl.innerHTML = "color:transparent"
    buttonEl.setAttribute("id", "answer3")
    buttonEl.setAttribute("class", "pbutton")
    buttonEl.dataset.correct = "false"
    spacer2El.append(buttonEl)
        
    var buttonEl = document.createElement("p")
    buttonEl.innerHTML = "display:none"
    buttonEl.setAttribute("id", "answer4")
    buttonEl.setAttribute("class", "pbutton")
    buttonEl.dataset.correct = "true"
    spacer2El.append(buttonEl)
            
    }

function startFinish () {
    round = round +1; 
    if (time >= 20){
        finalScore = score + 2
    }
    else if
        (time >= 10){
        finalScore = score + 1
        }

    highscoreEl.textContent = "Score = " + finalScore;
    headingEl.textContent = "Finish!";
    questionEl.textContent = "Congrats! Your score was " + score + ", with the time bonus bringing it to " + finalScore;

    var formEl = document.createElement("form")
    formEl.setAttribute("id", "highscore-form")
    formEl.addEventListener("submit", submitHighscore)
    spacer2El.append(formEl)
    
    var inputEl = document.createElement("input")
    inputEl.setAttribute("id", "highscore-input")
    formEl.append(inputEl)
   
    var buttonEl = document.createElement("p")
    buttonEl.innerHTML = "Try again?"
    buttonEl.setAttribute("id", "start")
    buttonEl.setAttribute("class", "pbutton")
    buttonEl.addEventListener("click", startTimer)
    buttonEl.addEventListener("click", startQuiz);
    spacer2El.append(buttonEl)

}

function nextQuestion (e){
    if (e.target !== e.currentTarget)
        var clickedItem = e.target.dataset.correct;
         console.log(clickedItem)
            if (clickedItem === "true") {
            score = score + 1
            highscoreEl.textContent= "Score = " + score;
            spacer2El.innerHTML = '';
            questionOrder[round] ();
    }
            else if (clickedItem === "false") {
            spacer2El.innerHTML = '';
            time=time-3;
            questionOrder[round] ();
        }
};

function startTimer () {
    time = 36;

    intervalID = setInterval(function() {
        time = time -1
        timerEl.innerHTML = "Time Left: " + time;
        if (time <= 0) {
            clearInterval(intervalID)
            spacer2El.innerHTML = '';
            startFinish ();}
        else if (round >=4) {
            clearInterval(intervalID);
        }
    }, 1000)
}

function submitHighscore (event) {
    event.preventDefault();
    var highscoreInput = document.getElementById("highscore-input").value;

    //if the local storage is null, this will prevent error messages

        if(localStorage.getItem('initials') == null){
            localStorage.setItem('initials', '[]')
        }

        if(localStorage.getItem('scores') == null){
            localStorage.setItem('scores', '[]')
        }
    
    //we unpack the old highscores and add the new score in to the mix
        
    var oldInitials = JSON.parse(localStorage.getItem('initials'));
    oldInitials.push(highscoreInput)

    var oldScores = JSON.parse(localStorage.getItem('scores'));
    oldScores.push(finalScore)

    //combine and sort the arrays

    var list = [];
        for (var i = 0; i < oldScores.length; i++)
        list.push({'allNames': oldInitials[i], 'allScores': oldScores[i]});

        list.sort(function(a,b){
            return ((a.allScores > b.allScores) ? -1 :((a.allScores == b.allScores) ? 0 : 1));
        });

        for (var i = 0; i < list.length; i++) {
            oldInitials[i] = list[i].allNames
            oldScores[i] = list[i].allScores
        }

    //we send the information back to the local storage

    localStorage.setItem('initials', JSON.stringify(oldInitials))

    localStorage.setItem('scores', JSON.stringify(oldScores))
    
    spacer2El.innerHTML = '';

    var buttonEl = document.createElement("p")
    buttonEl.innerHTML = "Try again?"
    buttonEl.setAttribute("id", "start")
    buttonEl.setAttribute("class", "pbutton")
    buttonEl.addEventListener("click", startTimer)
    buttonEl.addEventListener("click", startQuiz);
    spacer2El.append(buttonEl)
}

