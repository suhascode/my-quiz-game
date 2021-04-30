var canvas, backgroundImage;

var gameState = 0;
var contestantCount;
var allContestants;
var answer;
var database;
var result;

var question, contestant, quiz;


function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();

  result=createButton("Show Result");
  result.position(750,150);
  //result.mousePressed(showResult);

}


function draw(){
  background("green");
 
 if(contestantCount === 2){
   quiz.update(1);
  }
  result.mousePressed (()=>{
    if(gameState === 1){
      clear();  
      quiz.play();    
    }
  });
}