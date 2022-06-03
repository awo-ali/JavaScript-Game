//----------------------------Import Data --------------------------------//
import {questionsArray} from './Data/Questions.js'

/*console.log(questionsArray);
console.log(questionsArray[0].question);
console.log(questionsArray[0].content);
console.log(questionsArray[0].correct); 
console.log(questionsArray[0].content[2]);
console.log(questionsArray[0].content[0]);*/

//------------------------------Get Elements-------------------------------//

const questionBlock = document.querySelector(".grid-container__Question")
const answerBlock = document.querySelector(".grid-container__Answer")
const answerA = document.querySelector(".grid-container__Answer-A")
const answerB = document.querySelector(".grid-container__Answer-B")
const answerC = document.querySelector(".grid-container__Answer-C")
const answerD = document.querySelector(".grid-container__Answer-D")



//console.log(questionsArray.length);



//-------------------------------Functions-----------------------------------------//

/*const randomQuestionBlock = (array) =>{
   const randomQuestion = Math.floor(Math.random(questionsArray) * 75)
   console.log( randomQuestion = Math.floor(Math.random(questionsArray) * 75));
   return randomQuestion
}

console.log(randomQuestionBlock(questionsArray));
console.log(randomQuestion);*/
/*const randomQuestion = Math.floor(Math.random(questionsArray) * 75)
const obj = objects[randomQuestion]
console.log(obj);*/

const randomQuestion = (array) =>{
  const keys = Object.values(questionsArray)
  //console.log(keys);
  return keys[Math.floor(Math.random(questionsArray) * 75)]
}



//console.log(randomQuestion(questionsArray));

const questionAndAnswer = randomQuestion(questionsArray)
//console.log(questionAndAnswer);
//console.log(questionAndAnswer.correct);

//console.log(randomQuestion(questionsArray).content);
//console.log(randomQuestion(questionsArray).content[2]);



const addAnswers = (event) => {
    answerBlock.innerHTML = `
        <section class="grid-container__Answer">
          <div class="grid-container__Answer-blockOne">
            <div class="grid-container__Answer-A">A: ${questionAndAnswer.content[0]}</div>
            <div class="grid-container__Answer-C">C: ${questionAndAnswer.content[2]}</div>
          </div>
          <div class="grid-container__Answer-blockTwo">
            <div class="grid-container__Answer-B">B: ${questionAndAnswer.content[1]}</div>
            <div class="grid-container__Answer-D">C: ${questionAndAnswer.content[3]}</div>
          </div>
        </section>`
};


const addRandomQuestion = (event) => {
    questionBlock.innerHTML = 
    ` <section class="grid-container__Question"> ${questionAndAnswer.question} </section>`
};

console.log(addRandomQuestion);
console.log(questionAndAnswer.correct);

const answerCorrect = (answer, index) => {
  if (index === questionAndAnswer.correct){
    answer.classList.add('correctAnswer') 
  } else {
    answer.classList.add('incorrectAnswer') 
  }
  console.log(answerCorrect);
  console.log(answer);
  
};

/*const answerCorrect = (answer, index) => {
  if (index === questionAndAnswer.correct){
    answer.classList.toggle('correctAnswer') 
  } else {
    answer.classList.toggle('incorrectAnswer') 
  }
  console.log(answerCorrect);
  console.log(answer);
  
};
const answerCorrect = (answer, index) => {
  if (index === questionAndAnswer.correct){
    document.getElementById("overlay-1").style.display = "show"; 
  } else {
    document.getElementById("overlay-2").style.display = "block"
  }
  
}*/





/*const hover = (answer) =>{
  answer.classList.add('hoverAnswer') 
}*/


console.log();

//-----------------------------------------Return Function------------------------------------------//


window.addEventListener("load", addAnswers)
answerA.addEventListener("click", answerCorrect(answerA,0))
answerB.addEventListener("click", answerCorrect(answerB,1))
answerC.addEventListener("click", answerCorrect(answerC,2))
answerD.addEventListener("click", answerCorrect(answerD,3))
window.addEventListener("load", addRandomQuestion)
/*answerA.addEventListener("mouseover", hover(answerA))
answerB.addEventListener("mouseover", hover(answerB))
answerC.addEventListener("mouseover", hover(answerC))
answerD.addEventListener("mouseover", hover(answerD))*/
