//----------------------------Import Data --------------------------------//
import {questionsArray} from './Data/Questions.js'



//------------------------------Get Elements-------------------------------//

const questionBlock = document.querySelector(".grid-container__Question")
const answerBlock = document.querySelector(".grid-container__Answer")
const answerA = document.querySelector(".grid-container__Answer-A")
const answerB = document.querySelector(".grid-container__Answer-B")
const answerC = document.querySelector(".grid-container__Answer-C")
const answerD = document.querySelector(".grid-container__Answer-D")
const prizeTotal = document.querySelectorAll(".grid-container__prizeTotal")
const prizeContainer = document.querySelector(".grid-container__prize")


console.log(prizeTotal);


//-------------------------------Functions-----------------------------------------//

const randomQuestion = (array) =>{
  const keys = Object.values(questionsArray)
  return keys[Math.floor(Math.random(questionsArray) * 75)]
}

const questionAndAnswer = randomQuestion(questionsArray)

const addRandomQuestion = (event) => {
    questionBlock.innerHTML = 
    ` <section class="grid-container__Question"> ${questionAndAnswer.question} </section>`
};
console.log(questionAndAnswer);

const addAnswers = () => {
  answerA.innerText = `A: ${questionAndAnswer.content[0]}`
  answerC.innerText = `B: ${questionAndAnswer.content[2]}`
  answerB.innerText = `C: ${questionAndAnswer.content[1]}`
  answerD.innerText = `D: ${questionAndAnswer.content[3]}`
};

const handleClick = (event) => {
  if(event.target.id === "grid-container__AnswerButton-A") {
    answerCorrect(answerA, 0)
  } else if (event.target.id === "grid-container__AnswerButton-B"){
    answerCorrect(answerB, 1)
  } else if (event.target.id === "grid-container__AnswerButton-C"){
    answerCorrect(answerC, 2)
  } else if (event.target.id === "grid-container__AnswerButton-D"){
    answerCorrect(answerD, 3)
  }
  
};

const answerCorrect = (answer, index) => {
  if (index === questionAndAnswer.correct) {
    answer.classList.add("correctAnswer");
  } else {
    answer.classList.add("incorrectAnswer");
  }
  
};

console.log(questionAndAnswer.correct);

const clearAnswer = (answer, index) => {
  answer.classList.remove("correctAnswer");
  answer.classList.remove("incorrectAnswer");
}

const clearAnswerDelay = async (clearAnswer) => {
await delay(5000);
console.log(clearAnswer);
};

//const nextQuestion = 

const totalPrize = (event) => {

  for (let i = 0; i < prizeTotal.length; i++) {
    if (questionAndAnswer.correct){
      prizeTotal[i].classList.add("prizeScore");
    }else{
      prizeTotal[14].classList.add("prizeScore");
    }
  }
  
}


//-----------------------------------------Return Function------------------------------------------//


window.addEventListener("load", addAnswers)
window.addEventListener("load", addRandomQuestion)
answerA.addEventListener("click", handleClick);
answerB.addEventListener("click", handleClick);
answerC.addEventListener("click", handleClick);
answerD.addEventListener("click", handleClick);
window.addEventListener("load", totalPrize);
window.addEventListener("load", clearAnswer);
