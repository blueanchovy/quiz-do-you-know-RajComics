var readlineSync = require('readline-sync');
var username = readlineSync.question("What is your name? ");
console.log("Welcome " + username + " to DO YOU KNOW RAJ COMICS");
var score=0;
var high = [
  "Manish : 5",
  "Harsh : 4"
]
// play function
function quiz(question, answer){
  var userAnswer = readlineSync.question(question);
  if(userAnswer===answer){
    console.log("Right");
    score+=1;
  }
  else{
    console.log("Wrong");
    score-=1;
  }
  console.log("Current Score: " + score);
}
//questions and answers
var questions = [
  {
    q:"What is Nagraj's secret identity?",
    a:"Raj"
  },
  {
    q:"What does 'Parmanu' mean in English?",
    a:"Atom"
  },
  {
    q:"What is the name of Dhruv's sister?",
    a:"Shweta"
  },
  {
    q:"What is Anthony's last name?",
    a:"Gonsalves"
  },
  {
    q:"Chanda is the secret identity of which Superheroine?",
    a:"Shakti"
  }
]
for(var i = 0 ; i<questions.length ; i++){
  quiz(questions[i].q, questions[i].a);
}
// result
console.log("Your final score is: "+score);
console.log("The high scores are: ");
  for(var j = 0; j<high.length; j++){
    console.log(high[j]);
  }
if(score>0){
    console.log("Congratulations " +username+ "! You achieved high score!\nPing me to get added to the Leaderboard.");
  }