class Question{
    constructor(){
        this.title = createElement("h1");
        this.question = createElement("h2");
        this.option1 = createElement("h3");
        this.option2 = createElement("h3");
        this.option3 = createElement("h3");
        this.option4 = createElement("h3")
        this.input = createInput("Answer");
        this.input1 = createInput("Name");
        this.button = createButton("Submit");
    }
    hide(){
        //this.greeting.hide()
        this.button.hide()
        this.input1.hide()
        this.input.hide()

    }
    display(){
        this.title.html("MY QUIZ GAME");
        this.title.position(350,10);

        this.question.html("QUESTION :- Which Country has a large Population");
        this.question.position(150,80);

        this.option1.html("1.China");
        this.option1.position(150,110);

        this.option2.html("2.India");
        this.option2.position(150,130);

        this.option3.html("3.United States");
        this.option3.position(150,150);

        this.option4.html("4.Japan");
        this.option4.position(150,170);

        this.input1.position(150,220);

        this.input.position(400,220);

        this.button.position(330,250);

        this.button.mousePressed(()=>{
          
            this.title.hide();
            this.input1.hide();
            this.button.hide();
            //this.button.position(200,250);
            this.button.hide();
            contestant.name = this.input1.value();
            contestant.answer = this.input.value();
            contestantCount += 1 ;
            contestant.index = contestantCount
            contestant.update();
            contestant.updateCount(contestantCount);
           // this.greeting.html("Hello" + player.name);
            //this.greeting.position(130,160);
 
        })
    }
    
}