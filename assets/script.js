var questionSet = document.getElementById('question_container');
var startButton = document.getElementById("start_quiz");
var quizQuestion = document.getElementById('question');
var quizAnswer = document.getElementById('answer');
var first_part = document.getElementById('invi')
var answerButton = document.getElementsByClassName('btn')
var timeLeft = document.getElementById('time')
var timeText = document.getElementsByClassName('timer')
var quitBtn = document.getElementById('quit')
var retryButton = document.getElementById('retry')
var endGame = document.getElementById('end-game')
var wrongCorrect = document.getElementById('wrongCorrect')
var main = document.getElementById('main_container')
var title = document.getElementById('title')
var header = document.getElementById('head')
var finalScore = document.getElementById('finalScore')
var submit = document.getElementById('submit')
var highscoreContainer = document.getElementById('highscoreContainer')



var score =0;
var timeRemaining;
var shuffledQuestions
var currentQuestionIndex 

// this is for the start button.
startButton.addEventListener('click', startQuiz);
  
// once you click any of the answer the next question appear.
quizAnswer.addEventListener('click', ()=>{
      currentQuestionIndex++
    nextQuestion()

 })

function startQuiz() {
    score = 0;
    finalScore.textContent = score
    first_part.classList.add('hide')
    shuffledQuestions = questionList.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    timeRemaining = 10;
    questionSet.classList.remove('hide')
    nextQuestion(); 
    var interval = setInterval(function(){
    timeRemaining--;
    timeLeft.textContent = timeRemaining;
    if(timeRemaining === 0){
    clearInterval(interval)
    lastPart()
    }}, 1000);
}


// this is to show the question after clicking the start button.
 function nextQuestion(){
    resetQuestion()
    showQuestion(shuffledQuestions[currentQuestionIndex])
 }
// this is to show the question that is in the array.
function showQuestion(question){
    quizQuestion.innerText = question?.questions
    question?.answers.forEach(answers =>{
    const button = document.createElement('button')
    button.innerText = answers.text
    button.classList.add('btn')
    if (answers.correct){
    button.dataset.correct =answers.correct
    } 
   button.addEventListener('click', selectAnswers)  
   quizAnswer.appendChild(button)
    })
}

function resetQuestion(){
    clearStatusClass(document.body)
    while (quizAnswer.firstChild){
    quizAnswer.removeChild(quizAnswer.firstChild)
    }

}
 function selectAnswers(answer){
    var selectedAnswer = answer.target //getting users answer
    var correctAnswer = selectedAnswer.dataset.correct //getting the correct answer
    setStatusClass(document.body, correctAnswer)
    if(shuffledQuestions.length > currentQuestionIndex+1){
    }else
    {questionSet.classList.add('hide')
    }
   
}


function setStatusClass(body, correct) {
    clearStatusClass(body)
    if (correct) {
      body.classList.add('correct')
      body.classList.remove('wrong')
      wrongCorrect.textContent = "YOU'RE CORRECT!!!!"
      score = score +1;

      
    } else {
      body.classList.add('wrong')
      body.classList.remove('correct')
      wrongCorrect.textContent = "YOU'RE WRONG!!!!";
      timeRemaining = timeRemaining -5;
    }
  } 
  function clearStatusClass() {
  }

function lastPart(){
    endGame.classList.remove('hide')
    main.classList.add('hide')
    header.classList.add('hide')
    title.classList.add('hide')

}

submit.addEventListener("click", function(){
    highscoreContainer.classList.remove("hide")
    endGame.classList.add('hide') 
})

retryButton.addEventListener("click", function(){
    window.location.reload();
});

quitBtn.addEventListener('click', function(){
    endGame.classList.add('hide')   
})
    

var userScore = JSON.stringify(localStorage.getItem('count'))
finalScore.textContent = userScore;
console.log(userScore)


var questionList = [
{
    questions: 'These errors occur when the Javascript code is not a syntactically correct.',
    answers: [
        { text: 'Runtime errors', correct: false},
        { text: 'Syntax errors', correct: true},
        { text: 'Logical errors', correct: false},
        { text: 'Errors', correct: false}
        ]
},

 {
    questions: 'Javascript data types that represent true and false values.',
    answers: [
        { text: 'String', correct: false},
        { text: 'Number', correct: false},
        { text: 'Null', correct: false},
        { text: 'Boolean', correct: true},
        ]
},

{
    questions: 'You can reassign new values and redeclare them.',
    answers: [
        { text: 'Let', correct: false},
        { text: 'Const', correct: false},
        { text: 'Var', correct: true},
        { text: 'Array', correct: false},
        ]
},

{
    questions: 'An input container with a label and a text field that lets a user enter input.',
    answers: [
        { text: 'Alert Box', correct: false},
        { text: 'Prompt Box', correct: true},
        { text: 'Confirmation Box', correct: false},
        { text: 'Box Shadow', correct: false},
        ]
},
{
    questions: 'When variable is declared  and not yet assigned a value.',
    answers: [
        { text: 'Undefined', correct: true},
        { text: 'Null', correct: false},
        { text: 'Symbol', correct: false},
        { text: 'Boolean', correct: false},
        ]
},

{
    questions: 'A popular web scripting language that used for client-side and server side development.',
    answers: [
        { text: 'Javascript', correct: true},
        { text: 'HTML', correct: false},
        { text: 'CSS', correct: false},
        { text: 'SQL', correct: false},
        ]
},

];