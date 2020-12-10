var readlineSync = require('readline-sync');
var color = require('chalk');
const CFonts = require('cfonts');


/**************************************** ALL VARIABLES ***********************************/

var score = 0


var questionList = [
	{
  que:"Well do you know my name?",
  ans:"Rishav Bharti"
},
{
  que:"Guess my age if I am millennial?",
  ans:'19'
},
{
  que:"What's my favourite book?",
  ans:"The Third Gate"
},
{
  que:"Whom do I admire the most?",
  ans:"Elon musk"
},
{
  que:"What is my favourite no.?",
  ans:'1'
},
{
  que:"Where do I live?",
  ans:"Bangalore"
},
{
  que:"I prefer Green Tea or Coffee?",
  ans:"Coffee"
},
{
  que:"Who is my favourite superhero?",
  ans:"The Flash"
},
{
  que:"Who is my favourite cartoon character?",
  ans:"Doraemon"
},
{
  que:"What is my goal?",
  ans:"Product Based Company"
}
]

var leaderBoard = [
	{name:"Player-1",score: 3},
	{name:"Player-2",score: 6},
	{name: "Player-3",score: 7.5},
	{name:"Player-4",score: 4.5}
];




/**************************************** ALL Functions ***********************************/

function ruleBook(){
	console.log(color.hex('#5B84B1FF')('Rule 1️⃣ : For every ' + color.green('RIGHT') + (' answer you will be awarded with ')+  color.green('1') + (' Point.\n')));

	console.log(color.hex('#5B84B1FF')('Rule 2️⃣ : For every ' + color.red('WRONG') + (' answer') +  color.red(' 0.25 ') + ('points will be deducted from your score.\n')));
	
	console.log(color.hex('#5B84B1FF')('Rule 3️⃣ : After the game Score Board will be display, if you cross the threshold (score > 7.5) score please send me screenshot i will update the leaderboard.\n\n'));
}


function game(question, answer){
	// console.log(color.hex('#FFD700')('**********************************************************************************'));
  var userAnswer = readlineSync.question(color.hex('#FC766AFF')(question));

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { 
    
		score = score + 1;
		console.log(color.green.underline("Hurrey, that's a right answer!👍"));
    
  } else {
		score = score - 0.25;
    console.log(color.red.underline("Sorry,that's a wrong answer.👎"));
   
  }
	
	console.log("\ncurrent score: ", score, '\n');

	console.log(color.hex('#FFD700')('**********************************************************************************'));
	
}


function welcomeUser(name){
	CFonts.say('Welcome '+name + '!', {
			font: 'chrome',              // define the font face
			align: 'center',              // define text alignment
			colors: ['#fff56f'],         // define all colors
			background: 'transparent',  // define the background color, you can also use `backgroundColor` here as key
			letterSpacing: 1,           // define letter spacing
			lineHeight: 1,              // define the line height
			space: true,                // define if the output text should have empty lines on top and on the bottom
			maxLength: '0',             // define how many character can be on one line
			gradient: ["red","green"],            // define your two gradient colors
			independentGradient: false, // define if you want to recalculate the gradient for each new line
			transitionGradient: false,  // define if this is a transition between colors directly
			env: 'node'                 // define the environment CFonts is being executed in
	});
}


function showLeaderBoard(lb){
	for(player of lb){
		console.log(color.yellow(player.name + ' : ' + color.red(player.score)));
	}
}






/**************************************** THE GAME ***********************************/

console.log(color.green.bold.underline("WELCOME TO THE QUIZ !🔥🔥🔥\n\n"));

var userName = readlineSync.question(color.hex('#FC766AFF')("Hey there, What's your name?🤔\n"));


welcomeUser(userName);


console.log(color.hex('#FC766AFF')(`Hey👋  ${userName}. Are you ready for the game? This game is about how well you know me.\n\nPress enter to read Rules\n\n`));

readlineSync.question();


console.log(color.hex('#CDB599FF')('---------------------------------------------------------------------------------------'));
ruleBook();

console.log(color.hex('#CDB599FF')('---------------------------------------------------------------------------------------\n'));

console.log(color.hex('#FFD700')('**********************************************************************************'));

for(var q of questionList){
	game(q.que,q.ans);
}

console.log(color.hex('#FC766AFF')('Your total score is '+ color.green(score) + '.\nBelow is the Leaderboard\n'));

showLeaderBoard(leaderBoard);