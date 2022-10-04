const username = document.getElementById('username');
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");


const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

// max number of scores to be saved in local storage
const MAX_SCORES = 5;

// console.log(JSON.parse(localStorage.getItem("highScores")));
console.log
finalScore.innerText = mostRecentScore;

username.addEventListener('keyup',()=>{
    saveScoreBtn.disabled = !username.value;
})
saveHighScore = e =>{
    console.log("clicked the save button");
    e.preventDefault();

    const score ={
        score: mostRecentScore,
        name: username.value
    };
    highScores.push(score);


    // sorting the array after pushing it so that only top 5 score wil remain in the local storage and other will be deleted
    highScores.sort((a,b)=>b.score - a.score)

    highScores.splice(5);

    localStorage.setItem("highScores", JSON.stringify(highScores)); 
    // window.location.assign("/");
}