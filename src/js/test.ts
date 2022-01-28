import { tttBoardComponent } from './startGame';

const button0 = document.getElementById("0");
const button1 = document.getElementById("1");
const button2 = document.getElementById("2");
const button3 = document.getElementById("3");
const button4 = document.getElementById("4");
const button5 = document.getElementById("5");
const button6 = document.getElementById("6");
const button7 = document.getElementById("7");


    
 button0?.addEventListener("click", function() {
    var runs = new Run();
    runs.drawboard();
});

class Run {
  drawboard(){
    // gør brættet ternet
    let s = document.querySelectorAll(".square");

    for (let i:number = 0; i < s.length; i++){
      if (parseInt(s[i].id)%2 == 0){
        (s[i] as HTMLInputElement).classList.add("square","square_default_gray");
      }else {
        (s[i] as HTMLInputElement).classList.add("square","square_default_white");
      }
    }
  }

  onClick(event:any){
    let id = parseInt(event.target.id);
    let destinationX = id%3;
    let destinationY = Math.floor(id/3);        
 
    if(this.game.Board.Board[destinationX][destinationY] == " " && this.game.GameRunning == true){
      if (this.game.put(id)){event.target.classList.add("square","square_illegal");}
      this.TurnText = this.game.whoseTurn();
  
      //console.log(this.game.CrossesTurn);
      console.log(this.game.Turns);
      //console.log(this.game.GameRunning);
    }

 
  }
}

function doSomething(event: any) {
    console.log("virker" + event)
  }


function test(id: number) {
  var game = new tttBoardComponent();
  game.mouseEnter(id);
}

