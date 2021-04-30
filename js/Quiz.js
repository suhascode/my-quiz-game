class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
     question.hide();
    //write code to change the background color here
    console.log("I am in Playyyy")
     background("lightblue");
    //write code to show a heading for showing the result of Quiz
    textSize(30);
    fill("blue")
    text("Result Of The Quiz",300,35);
    //call getContestantInfo( ) here
      Contestant.getPlayerInfo();
    //write condition to check if contestantInfor is not undefined
    //write code to add a note here
    console.log("Contestant" + allContestants);
    if(allContestants !== undefined){
      var display_position=240;
      console.log("I am undefined")
    fill("blue");
    textSize(20);
    text("NOTE: Contestants who  answered correctly are highlighted in green colour!",130,230)
    }
       
    //write code to highlight contest who answered correctly
    for(var plr in allContestants){
      display_position+=20;
     var correctAns="2";
     if (correctAns === allContestants[plr].answer){
       fill("Green");
       console.log("I am green")
       text(allContestants[plr].name + ": " + allContestants[plr].answer, 130,display_position)
     }
       else {
       fill("Red");
       text(allContestants[plr].name + ": " + allContestants[plr].answer, 130,display_position)
       }
    }





  }

}
