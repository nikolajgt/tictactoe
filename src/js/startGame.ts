import { Game } from './GameLogic/game';


const button0 = document.getElementById("0");
const button1 = document.getElementById("1");
const button2 = document.getElementById("2");
const button3 = document.getElementById("3");
const button4 = document.getElementById("4");
const button5 = document.getElementById("5");
const button6 = document.getElementById("6");
const button7 = document.getElementById("7");
const button8 = document.getElementById("8");

const refreshButton = document.getElementById("refreshButton");
const newGameButton = document.getElementById("newGame");

export class tttBoardComponent {                    // HAVDE NOGET IMPLEMENTS ONINIT, NOGET ANGULAR SHIT
  Scale: number = 0.8;
  TurnText: string ="Crosses turn";
  game: Game = new Game();

  Naught: Number = 0;
  Cross: Number = 0;


  drawboard(){
    // gør brættet ternet
    let s = document.querySelectorAll(".square");

    Array.from(s).forEach((el) => el.classList.remove('square_illegal'));
    Array.from(s).forEach((el) => el.classList.remove('square_legal'));

    for (let i:number = 0; i < s.length; i++){
      if (parseInt(s[i].id)%2 == 0){
        (s[i] as HTMLInputElement).classList.add("square","square_default_gray");
      }else {
        (s[i] as HTMLInputElement).classList.add("square","square_default_white");
      }
    }
  }
  
    // SKAL EXECUTES NÅR MAN LANDER PÅ SIDEN 
  reset(){
    // nulstiller grafik og spillogik
    this.drawboard();
    this.game.reset();
    this.TurnText = this.game.whoseTurn();
    this.game.NaughtsScore = 0;
    this.game.CrossScore =0;
    this.clearParagraphs()
  }


  Game() {
    this.drawboard();
    this.game.reset();
    this.clearParagraphs()
  }

  clearParagraphs()
  {
    var p = document.querySelectorAll("p");
    for(let i:number = 0; i < p.length; i++)
    {
      p[i].innerHTML = " ";
    }
  }

  ////////////////////////////////////////////////////////////
  //INPUT EVENTS
  ////////////////////////////////////////////////////////////
  onClick(event:any){
    let id = parseInt(event.target.id);
    let destinationX = id%3;
    let destinationY = Math.floor(id/3);        
 
    if(this.game.Board.Board[destinationX][destinationY] == " " && this.game.GameRunning == true){
      if (this.game.put(id)){
        event.target.classList.add("square","square_illegal");
      }
      this.TurnText = this.game.whoseTurn();

      this.score();
      
      console.log(this.TurnText)
      //console.log(this.game.CrossesTurn);
      //console.log(this.game.Turns);
      //console.log(this.game.GameRunning);
    }

 
  }

  score() {
    this.Naught = this.game.NaughtsScore;
    this.Cross = this.game.CrossScore;

    var cross = document.getElementById("crosses");
    var naughts = document.getElementById("naughts");
    if(cross) cross.innerHTML = this.Cross.toString()
    if(naughts) naughts.innerHTML = this.Naught.toString()

  }

  mouseEnter(event:any){
    let id = parseInt(event.target.id);

    let destinationX = id%3;
    let destinationY = Math.floor(id/3);            
  
    if(this.game.Board.Board[destinationX][destinationY] == " " && this.game.GameRunning == true){

      event.target.classList.toggle("square_legal");

    }else{
      event.target.classList.add("square_illegal");
    }
  }
  
    mouseLeave(event:any){
      event.target.classList.remove("square","square_illegal","square_legal")
      
      let id = parseInt(event.target.id);
      if (id%2 == 0){
        event.target.classList.add("square","square_default_gray");
      }else{
        event.target.classList.add("square","square_default_white");
      }
    }
  }

var runs = new tttBoardComponent();

button0?.addEventListener("click", function(event: any) {
;
  runs.onClick(event);
});

button1?.addEventListener("click", function(event: any) {

  runs.onClick(event);
});

button2?.addEventListener("click", function(event: any) {

  runs.onClick(event);
});

button3?.addEventListener("click", function(event: any) {

  runs.onClick(event);
});

button4?.addEventListener("click", function(event: any) {

  runs.onClick(event);
});

button5?.addEventListener("click", function(event: any) {

  runs.onClick(event);
});

button6?.addEventListener("click", function(event: any) {

  runs.onClick(event);
});

button7?.addEventListener("click", function(event: any) {

  runs.onClick(event);
});

button8?.addEventListener("click", function(event: any) {

  runs.onClick(event);
});

button0?.addEventListener("mouseover", function(event: any) {
  runs.mouseEnter(event);

});
// HOVER IN
button1?.addEventListener("mouseover", function(event: any) {
  runs.mouseEnter(event);

});

button2?.addEventListener("mouseover", function(event: any) {
  runs.mouseEnter(event);

});

button3?.addEventListener("mouseover", function(event: any) {
  runs.mouseEnter(event);

});

button4?.addEventListener("mouseover", function(event: any) {
  runs.mouseEnter(event);

});

button5?.addEventListener("mouseover", function(event: any) {
  runs.mouseEnter(event);

});

button6?.addEventListener("mouseover", function(event: any) {
  runs.mouseEnter(event);
  ;
});

button7?.addEventListener("mouseover", function(event: any) {
  runs.mouseEnter(event);
 
});

button8?.addEventListener("mouseover", function(event: any) {
  runs.mouseEnter(event);
 
});

// HOVER OUT

button0?.addEventListener("mouseleave", function(event: any) {
  runs.mouseLeave(event);
});

button1?.addEventListener("mouseleave", function(event: any) {
  runs.mouseLeave(event);
});

button2?.addEventListener("mouseleave", function(event: any) {
  runs.mouseLeave(event);
});

button3?.addEventListener("mouseleave", function(event: any) {
  runs.mouseLeave(event);
});
button4?.addEventListener("mouseleave", function(event: any) {
  runs.mouseLeave(event);
});

button5?.addEventListener("mouseleave", function(event: any) {
  runs.mouseLeave(event);
});

button6?.addEventListener("mouseleave", function(event: any) {
  runs.mouseLeave(event);
});

button7?.addEventListener("mouseleave", function(event: any) {
  runs.mouseLeave(event);
});

button8?.addEventListener("mouseleave", function(event: any) {
  runs.mouseLeave(event);

});

//RESTERNEDE KANPPER


refreshButton?.addEventListener("click", function() {
  runs.reset();

});

newGameButton?.addEventListener("click", function() {
  runs.Game();

});




    