var questionSet = document.getElementById('question_container');
var startButton = document.getElementById("start_quiz");
var nextButton = document.getElementById("next_btn");
var quizQuestion = document.getElementById('question');
var quizAnswer = document.getElementById('answer');
var first_part = document.getElementById('invi')
var answerButton = document.getElementsByClassName('btn')
var timeLeft = document.getElementById('time')
var quitBtn = document.getElementById('quit')
var end = document.getElementById('end-game')
var wrongCorrect = document.getElementById('wrongCorrect')

var score= 0;
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
    first_part.classList.add('hide')
    shuffledQuestions = questionList.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    timeRemaining = 60;
    questionSet.classList.remove('hide')
    nextQuestion(); 
    var interval = setInterval(function(){
    
        timeRemaining--;
        timeLeft.textContent = timeRemaining;
        if(timeRemaining === 0){
            clearInterval(interval)
        }
        
    }, 1000);
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
    Array.from(quizAnswer.children).forEach(button =>{
        setStatusClass(button, button.dataset.correct)
    })
    if(shuffledQuestions.length > currentQuestionIndex+1){
          
        }
        else{questionSet.classList.add('hide') 
    }
 
}
// this is to check if the answer is correct or wrong and for the borderline of green and red

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
      element.classList.add('correct')
      wrongCorrect.innerText = "WRONG!!!!"
    } else {
      element.classList.add('wrong')
      wrongCorrect.innerText = "CORRECT!!!!"
      
    }
  }
  
  function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
  }
// the question and answer that is in the array
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