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
let answerTotal = 14
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
 
}


const answerCorrect = (answer, index) => {
  if (index === questionAndAnswer.correct) {
    answer.classList.add("correctAnswer");
    // answerTotal = answerTotal - 1 ;
    console.log(answerTotal);
    setTimeout(resetQuestionsAndAnswers, 1000);
  } else {
    answer.classList.add("incorrectAnswer");
    answerTotal = 14;
    setTimeout(resetQuestionsAndAnswers, 1000);
  }
  
};

console.log(questionAndAnswer.correct);

const totalCorrectAnswer = (index) => {
  if (index === questionAndAnswer.correct){
    return answerTotal - 1;

  }
  
}
console.log(answerTotal);

const totalPrize = (event) => {
// console.log(answerTotal);
 console.log(event);
 
    if (questionAndAnswer.correct){

      if(event.target.id === "grid-container__AnswerButton-A") {
       answerTotal = totalCorrectAnswer(0)
        
      } else if (event.target.id === "grid-container__AnswerButton-B"){
        answerTotal =  totalCorrectAnswer(1)
      } else if (event.target.id === "grid-container__AnswerButton-C"){
        answerTotal =  totalCorrectAnswer(2)
      } else if (event.target.id === "grid-container__AnswerButton-D"){
        answerTotal = totalCorrectAnswer(3)
      }
      console.log(answerTotal);
      prizeTotal[answerTotal].classList.add("prizeScore");
    }else{
      prizeTotal[14].classList.add("prizeScore");
    }
  
  
}


//-----------------------------------------Return Function------------------------------------------//


window.addEventListener("load", addAnswers)
window.addEventListener("load", addRandomQuestion)
answerA.addEventListener("click", handleClick);
answerB.addEventListener("click", handleClick);
answerC.addEventListener("click", handleClick);
answerD.addEventListener("click", handleClick);
answerBlock.addEventListener("click", totalPrize);

