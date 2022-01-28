import { tttBoard } from './board';

// Denne klasse indeholder den overordnede logik 
export class Game {
    
  GameRunning: boolean = true;    

  Turns: number = 0;

  CrossScore: number = 0;

  NaughtsScore: number = 0;

  CrossesTurn: boolean;

  Board = new tttBoard();

  constructor(){
    this.CrossesTurn = true;
  }

  reset(){
    this.Board.reset();

    this.CrossesTurn = Math.random() > 0.5? true: false;
    this.Turns = 0;
  
    this.GameRunning = true;
  }

  put(square: number){
    // når spilleren placerer en brik
    let putted = false;

    if (square > -1){
      let destinationX = square%3;
      let destinationY = Math.floor(square/3);            

      if (this.GameRunning == true){
        if (this.Board.Board[destinationX][destinationY] == " "){
          var obejcto = document.getElementById("00"+ square.toString());
          this.Board.Board[destinationX][destinationY] = this.CrossesTurn? "X": "O";
          if(obejcto) obejcto.innerHTML = this.CrossesTurn? "X" : "O".toString();
          putted = true;
        }
      }
      this.turn();
    }
    return putted;
  }
  
  
  turn(){
    this.Turns++;
    this.GameRunning = this.Board.checkBoard(this.Turns);
    if (this.GameRunning){
      this.CrossesTurn = !this.CrossesTurn;
    }
  }


   
  whoseTurn(){
  // til brugerfladen
    if(this.GameRunning){
      if (this.Turns < 9) {
        if (this.CrossesTurn){
          return "Crosses turn";
        }else{
          return "Noughts turn";
        }
      }else{
        return "Draw";
      }
    }else{
      if (this.CrossesTurn){
        this.CrossScore++;
        return "Crosses won";
        
      }else{
        this.NaughtsScore++;
        return "Noughts won";
        
      }
    }
  }

  ai(Board: String[][]){
    // er ikke rigtig AI pt. Men får computerspilleren til at spille tilfældigt.
    let moved:boolean = false;

    let move:number = Math.floor(Math.random()*8)
  
    while (moved == false && this.GameRunning == true && this.Turns < 9){
      if (Board[Math.floor(move/3)][move%3] == " "){
        if (this.CrossesTurn){
          Board[Math.floor(move/3)][move%3] = "X";
          moved = true;
        } else{
          Board[Math.floor(move/3)][move%3] = "O";
          moved = true;
        }
      }else {
        move = Math.floor(Math.random()*8);
      }
    }
    this.turn();
  }
}    