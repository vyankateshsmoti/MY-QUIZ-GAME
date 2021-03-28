var canva;
var gameState = 0;
var contestantCount,contestant;
var quiz;
var database;
var question;
var allContestants;


function setup(){
  database = firebase.database();
  canvas = createCanvas(850,400);
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background("pink");
  if(contestantCount === 4){
    quiz.update(1);
}
if(gameState === 1){
    clear();
    quiz.play();
}

  
}
