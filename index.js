var readlineSync = require("readline-sync");

const chalk = require("chalk");

var score = 0;

console.log(chalk.bold.white.bgBlue("THIS IS A QUIZ TO SEE HOW WELL YOU KNOW ME!"));
console.log(chalk.cyan.bold("**********-------*********"));
console.log(chalk.cyan.bold("**********-------*********"));
console.log(chalk.cyan.bold("**********-------*********"));
console.log(chalk.cyan.bold("**********-------*********"));
console.log(chalk.cyan.bold("**********-------*********"));

var userName = readlineSync.question(chalk.bold.black.bgWhite("Hi, please enter your name and the game will begin!\n\n"));

console.log(chalk.bold.green("THE GAME BEGINS NOW!"))

console.log(chalk.red(`Welcome ${userName}!
Lets see how well you know me 😉`));

console.log(chalk.black.bold("___________________________________________________"));
console.log(chalk.black.red("___________________________________________________"));
console.log(chalk.black.red("___________________________________________________"));
console.log(chalk.black.bold("___________________________________________________"));






//keep data of high score

var playerScore = [

{
  name: "Jill",
  score : 6,
},

{
  name: "jack",
  score : 3,
},
{

  name: "James",
  score: 4,
}


];


//Play function

function play(question,answer){


var userAnswer = readlineSync.question

var userAnswer = readlineSync.question(question);



if(userAnswer.toUpperCase() === answer.toUpperCase()){

  console.log(" You are right! ");
  var newScore = score++;

  console.log(`You have scored ${score} points `);
 
   console.log(chalk.red("--------------"));
    console.log(chalk.red("--------------"));
     console.log(chalk.red("--------------"));
      console.log(chalk.red("--------------"));
}
else{

  console.log(chalk.red("Wrong!"));
  console.log("Dont lose hope, continue answering...")
  console.log("___________________");
  console.log("___________________");
}


}




// array of objects
var questions = [{

  question : "What is my full name ?",
  answer : "Keshav TN"
},
  
  
{

  question : "Where do I live ? ",
  answer : "Bangalore"
},
{

  question : "What do I do ?",
  answer : "Engineering"
},
{
    question : "What is my fav hobby ?",
  answer : "Public Speaking"

},
{
    question : "What is my favourite chat ?",
  answer : "Sev Puri"

},
{
   question : "What is my favourite tv show?",
  answer : "Friends"

},
{
  question : "Who is my favourite hero?",
  answer : "Ranveer Singh"

}
];

//loop
for(i=0;i<questions.length;i++)
{
  var q = questions[i];
	play(q.question,q.answer);
}

 
console.log(chalk.bold.green("If you beat their scores , send a screenshot to me and i'll update your score in the leaderboard!"))

console.log(chalk.red.bold("HERE IS THE LEADERBOARD"))
console.log("*----*-----*-----*")

function showLeaderBoard(){

	for(i=0;i<playerScore.length;i++)
  
  {
    player = playerScore[i];
		console.log(chalk.cyan(player.name + ' : ' + chalk.red(player.score)));
	}
}

function highScorer(){

    if(playerScore[0].score >playerScore[1].score){

      console.log(chalk.bold(" The Highest scorer is Jill")); 
    }
      else if(playerScore[1].score>playerScore[2].score)
      {
          console.log(chalk.bold("The Highest scorer is Jack"));
      }
      else if(playerScore[3].score>playerScore[0].score)
      {
        console.log(chalk.bold("The Highest scorer is James"));
      }
        
      }
  


showLeaderBoard(playerScore);
console.log("\n")
highScorer(playerScore);//function call

