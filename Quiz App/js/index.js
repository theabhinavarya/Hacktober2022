const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName('choice-text'));
const questionCounterText = document.getElementById("questionCounter");
const scoreText = document.getElementById("score");
const progressBarFull = document.getElementById("progressBarFull");
const gameContainer = document.getElementById("gameContainer");
const loader = document.getElementById("loader");
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

console.log("quiz app console");
let questions  = [];

fetch("./json/questions.json")
.then(res => {
    return res.json();
})
.then(loadedQuestions =>{
    console.log(loadedQuestions);
    questions  = loadedQuestions;


    startGame();
})
.catch(err =>{
    // we can add here required error message
    // console.error(err);
})
// adding catch case above so that to handle errors


// CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 4;

startGame = () =>{
    questionCounter=0;
    score = 0;
    availableQuestions = [...questions];
    console.log(availableQuestions);
    getNewQuestion();
}

getNewQuestion = () =>{
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS ){
        localStorage.setItem("mostRecentScore", score);
        // go to end page
        return window.location.assign("./end.html")
    }
    questionCounter++;

    // questionCounterText.innerText = questionCounter +  "/" + MAX_QUESTIONS;
    // writing above in ES6
    questionCounterText.innerText = "Question: " + `${questionCounter}/${MAX_QUESTIONS}`;


    // update progress bar
    progressBarFull.style.width = `${((questionCounter)/ MAX_QUESTIONS) * 100}%`;

    const questionIndex = Math.floor(Math.random() * availableQuestions.length);

     currentQuestion = availableQuestions[questionIndex];
     question.innerHTML = currentQuestion.question;

     choices.forEach(choice => {
        const number = choice.dataset["number"];
        choice.innerHTML = currentQuestion['choice' + number];
     });

     availableQuestions.splice(questionIndex, 1);
     acceptingAnswers = true;
};

choices.forEach(choice =>{
    choice.addEventListener('click', e =>{
        if(!acceptingAnswers) return;

        acceptingAnswers=false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];


        const classtoApply = selectedAnswer ===  currentQuestion.answer ? "correct" : "incorrect";

        if(classtoApply === "correct"){
            incremenScore(CORRECT_BONUS);
        }

        selectedChoice.parentElement.classList.add(classtoApply);
        
        setTimeout(()=>{
            console.log("setTimeout")
            selectedChoice.parentElement.classList.remove(classtoApply);
            getNewQuestion();
        },1000);
    })
})
incremenScore = num =>{
    score += num;
    scoreText.innerText = score;
}
// startGame();
