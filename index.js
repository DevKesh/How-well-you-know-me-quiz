// var readlineSync = require("readline-sync");

// const chalk = require("chalk");

// var score = 0;

// console.log(chalk.bold.white.bgRedBright("THIS IS A QUIZ TO SEE HOW WELL YOU KNOW ME!")
// );
// console.log(chalk.cyan.bold("**********-------*********"));
// console.log(chalk.cyan.bold("**********-------*********"));
// console.log(chalk.cyan.bold("**********-------*********"));
// console.log(chalk.cyan.bold("**********-------*********"));
// console.log(chalk.cyan.bold("**********-------*********"));

// var userName = readlineSync.question(chalk.bold(" What's your name?\n\n"));

// console.log(chalk.red(`Welcome ${userName}!
// How well do you know Keshav?`));

// console.log("______________________________")


// //keep data of high score

// var playerScore = [

// {
//   name: "Jill",
//   score : 5,
// },

// {
//   name: "jack",
//   score : 6,
// }

// ];

// // if PlayerScore.score > PlayerScore


// //Play function

// function play(question,answer){


// var userAnswer = readlineSync.question

// var userAnswer = readlineSync.question(question);

// if(userAnswer.toUpperCase() === answer.toUpperCase()){

//   console.log(" You are right! ");
//   score = score + 1;

//   console.log(`Your score is ${score}`);
 
//    console.log(chalk.red("--------------"));
//     console.log(chalk.red("--------------"));
//      console.log(chalk.red("--------------"));
//       console.log(chalk.red("--------------"));
// }
// else{

//   console.log(chalk.red("Wrong!"));
//   console.log("Dont lose hope, continue answering")
//   console.log("___________________")
// }

// }

// // array of objects
// var questions = [{

//   question : "Where do I live ? ",
//   answer : "Bangalore"
// },
// {

//   question : "What do I do ?",
//   answer : "Engineering"
// },
// {
//     question : "What is my fav hobby ?",
//   answer : "Public Speaking"

// },
// {
//     question : "What is my favourite chat ?",
//   answer : "Sev Puri"

// }
// ];

// //loop

// for(var i=0; i<questions.length;i++){

//   var currentQuestion = questions[i];
//   play(currentQuestion.question,currentQuestion.answer);
// }

// console.log(`Thanks for playing ${userName}!, Your final score is ${score}`);

// console.log("You can check the leaderboard here!/n")

// for(i=0;i<playerScore.length;i++){

//     var highscore = playerScore[i];
//   console.log(chalk.green(`Topping the leaderboard is ${highscore.name}  `));
//   console.log(chalk.red("******************"));
//   console.log(chalk.green(`Their scores are ${highscore.score} `));
// }
