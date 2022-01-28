export class tttBoard {
    public Board!: String[][];

    constructor(){
    this.reset();        
    }

    reset(){
        // brættets datamodel (2-dimensionelt array) 
        this.Board = [   
        [" "," "," "],
        [" "," "," "],
        [" "," "," "]
        ];
    }

    // tjek hvis en spiller har vundet
    // vi tjekker otte linjer.
    checkBoard(turns: number){
        let GameRunning = true;

        for (let y = 0; y < 3;y++){
            for (let x = 0; x < 3;x++){
                if (this.Board[x][y] != " "){
                    if(y == 0){
                        // tjek ned (3 linjer)
                        if (this.Board[x][y] == this.Board[x][y+1] && this.Board[x][y] == this.Board[x][y+2]){
                            GameRunning = false;
                        }
                    }
                    if(x == 0){
                        // tjek til højre (3 linjer)
                        if(this.Board[x][y] == this.Board[x+1][y] && this.Board[x][y] == this.Board[x+2][y]){
                            GameRunning = false;
                        }
                    }
                    if (x == 0 && y == 0){  
                        //tjek diagonalt 1
                        if (this.Board[x][y] == this.Board[x+1][y+1] && this.Board[x][y] == this.Board[x+2][y+2]){
                            GameRunning = false;                 }
                    }
                    if (x == 2 && y == 0){  
                        // tjek diagonalt 2
                        if (this.Board[x][y] == this.Board[x-1][y+1] && this.Board[x][y] == this.Board[x-2][y+2]){
                            GameRunning = false;
                        }
                    }
                } 
            } 
        }
        return GameRunning;
    }
    BoardtoArray(){
        // ikke i brug, skal bruges for at beregne ai træk i et et dimensionelt array
        let b:number[] = new Array(9);

        for (let x: number = 0; x < 3; x++){
        for (let y: number = 0; y < 3; y++){
            switch (this.Board[x][y]){
            case " ":
                b[x + y*3] = 0;
                break;
            case "O":
                b[x + y*3] = -1;
                break;
            case "X":
                b[x + y*3] = 1;
                break;
            }
        }
        }
        return b;
    } 
}