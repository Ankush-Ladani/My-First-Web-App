console.log("---------------")
console.log("Ensure that You Use First Letter Capital Of Every Input")
console.log("---------------")
var readlineSync = require("readline-sync");

var UserName = readlineSync.question("What's Your Name? ");

console.log("Welcome " + UserName + " to Do You Know Me Game? ");

var score = 0;


function play(question,answer){
  var userAnswer = readlineSync.question(question);

  if(userAnswer.toLowerCase() === answer.toLowerCase()){
    console.log("Right!")
    score++;
  }
  else{
    console.log("Wrong!")
  }

  console.log("Current Score is : " + score)
  console.log("-------------------")
}

var questionOne = {
  question : "Where do I Live? ",
  answer1 : "Jamjodhpur"
}
var questionTwo = {
  question : "Which Sports I Like To Play? ",
  answer1 : "Cricket"
}

var questions = [questionOne,questionTwo];

for(var i=0;i<questions.length;i++){
    play(questions[i].question,questions[i].answer1);
}
console.log("Your Final Score is " + score);

