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

let questionAndAnswer = randomQuestion(questionsArray)

console.log(questionAndAnswer)


const addRandomQuestion = () => {
    questionBlock.innerHTML = 
    ` <section class="grid-container__Question"> ${questionAndAnswer.question} </section>`
};


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


const resetQuestionsAndAnswers = () => {
  questionAndAnswer = randomQuestion(questionsArray)
  addRandomQuestion(questionAndAnswer)
  answerA.classList.remove("correctAnswer")
  answerA.classList.remove("incorrectAnswer")
  answerB.classList.remove("correctAnswer")
  answerB.classList.remove("incorrectAnswer")
  answerC.classList.remove("correctAnswer")
  answerC.classList.remove("incorrectAnswer")
  answerD.classList.remove("correctAnswer")
  answerD.classList.remove("incorrectAnswer")
  addAnswers()
  console.log(questionAndAnswer.correct);
}

var prizeTotalCounter = {
    index: 14
}

var increasePrizeTotalCounter = () => {
  // We add this if statement as the index cannot go any lower than 0.
  // If a user gets to index 0, that means they've got all the questions correct.
  if (prizeTotalCounter.index > 0) {
    prizeTotalCounter.index--
  }
}

var resetPrizeTotalCounter = () => {
  prizeTotalCounter.index = 14
}


const answerCorrect = (answer, index) => {
  if (index === questionAndAnswer.correct) {
    answer.classList.add("correctAnswer");
    setTimeout(resetQuestionsAndAnswers, 1000);
    increasePrizeTotal()
  } else {
    answer.classList.add("incorrectAnswer");
    setTimeout(resetQuestionsAndAnswers, 1000);
    decreasePrizeTotal();
  }
  
};


const increasePrizeTotal = () => {
  prizeTotal[prizeTotalCounter.index].classList.add("prizeScore")
  // We have an if statement below because if the index is 14, that means the user has answered
  // the first question correctly so all we need to do is select the $100 line. If the index is not
  // 14, that means the user has already answered a question correctly, so we also need to un-highlight
  // the total prize from the last answer they got right. 
  if (prizeTotalCounter.index != 14) {
    prizeTotal[prizeTotalCounter.index + 1].classList.remove("prizeScore")
  } 
  increasePrizeTotalCounter()  
}

const decreasePrizeTotal = () => {
  // If the index is 14, that means, the user is on their first question so we don't need to reset the total prize box.
  if (prizeTotalCounter.index != 14) {
    prizeTotal[prizeTotalCounter.index + 1].classList.remove("prizeScore")
    resetPrizeTotalCounter()
  }  
}

console.log(questionAndAnswer.correct);


//-----------------------------------------Return Function------------------------------------------//


window.addEventListener("load", addAnswers)
window.addEventListener("load", addRandomQuestion)
answerA.addEventListener("click", handleClick);
answerB.addEventListener("click", handleClick);
answerC.addEventListener("click", handleClick);
answerD.addEventListener("click", handleClick);


