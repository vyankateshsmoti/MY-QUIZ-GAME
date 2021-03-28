class Quiz{
    constructor(){

    }
  
    getState(){
        var gameStateRef = database.ref("gameState");
        gameStateRef.on("value",function(data){
            gameState = data.val();
        })
        

    }
    update(state){
        database.ref("/").update({
            gameState:state
        })
    }

    async start(){
        if(gameState === 0){
            contestant = new Contestant();
            var contestantCountRef = await database.ref('contestantCount').once("value");
            if(contestantCountRef.exists()){
                contestantCount = contestantCountRef.val();
                contestant.getCount();
            }
            question = new Question();
            question.display();
        }

    }
    play(){
        question.hide();
        background("yellow");
        textSize(30);
        fill("Purple");
        text("* Result Of the Quiz *",300,70);
        
        textSize(20);
        fill("blue");
        text("*NOTE: Contestant who answered correct are Highlighted in Green Colour ",150,230);
        
        
 
        Contestant.getContestantInfo();
        if(allContestants !== undefined){
            var display_position = 250;
        for(var plr in allContestants){
            var correctAns ="1";
            if(correctAns === allContestants[plr].answer){
                fill("green");
            }
            else{
                fill("red");
            }
            display_position += 20;
            textSize(20);
            text(allContestants[plr].name+":  "+ allContestants[plr].answer,420,display_position)
        }
        }
        if(keyIsDown(UP_ARROW)&& player.index !== null ){
            player.answer+=50
            player.update();
        }
    }
}


