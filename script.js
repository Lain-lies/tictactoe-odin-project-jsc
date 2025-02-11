

const gameBoard = (function () {  

    const gameArea = [

        ["|", "|", "|"],
        ["|", "|", "|"],
        ["|", "|", "|"]
        
    ];
    
    const init = () => {

        fetchDOM();
        bind();
    };

    const fetchDOM  = () => {
        
        const gameBoard = document.querySelector("#gameboard");
        const row = [...gameBoard.children];
        this.buttonArray = [

            [...row[0].children],
            [...row[1].children],
            [...row[2].children],

        ];

        console.log(this.buttonArray);

    };

    const switchPlayer = (player) => {
        
        this.playerMark = player;
        
    }
    
    const bind = () => {
        
        this.buttonArray.forEach(buttonRow => {
            buttonRow.forEach(button => {
                button.addEventListener("click", playerClick);
            });
        });
    }

    const playerClick = (e) => {
        

        const [i , j] = findButtonIndex(e.target);
        updateDisplay(e.target);
        updateGameArea(i, j);
        console.table(gameArea);

    }

    const findButtonIndex = (button) => {

        let iIndex;
        let jIndex;

        for(let i = 0; i < this.buttonArray.length; i++){

            jIndex = this.buttonArray[i].indexOf(button);
              
            if(jIndex !== -1){
                
                iIndex = i;  
                break;
            }
       
        }

        return [iIndex, jIndex];
        
    }

    const updateGameArea = (i, j) => {
        
        gameArea[i][j] = this.playerMark;
    }

    const updateDisplay = (button) => {
        
        button.textContent = this.playerMark;
    }

    const determineWinner = () => {
        
        //check X axis
        let winner;
        winner = checkHorizontal();
        if(winner) return winner;
        
        winner = checkVertical();
        if(winner) return winner;

        return 0;

    }

    const checkHorizontal = () => {

        let xCount = 0;
        let oCount = 0;

        for(let i = 0; i < gameArea.length; i++){
            
            xCount = 0;
            oCount = 0;

            for(let j = 0; j < gameArea.length; j++){
                
                if(gameArea[i][j] === "X"){
                    xCount++;

                }else if(gameArea[i][j] === "O"){

                    oCount++;
                }

            }
            
            if(xCount === 3){
                
                console.log("XCOUNT");
                return "X";

            }else if(oCount === 3){

                console.log("OCOUNT");
                return "O";
            }
        }

        return 0;
        
    }

    const checkVertical = () => {

        let xCount = 0;
        let oCount = 0;

        for(let j = 0; j < gameArea.length; j++){

            xCount = 0;
            oCount = 0;
            
            for(let i = 0; i < gameArea.length; i++){
                
                if(gameArea[i][j] === "X"){

                    xCount++;

                }else if(gameArea[i][j] === "O"){

                    oCount++;
                }
            }

            if(xCount === 3){
                
                console.log("XCOUNT");
                return "X";

            }else if(oCount === 3){

                console.log("OCOUNT");
                return "O";
            }
        }
    }

    return {

        init,
        switchPlayer,
        determineWinner,

    };

})();


const player1 = "X";
const player2 = "O";

gameBoard.init();
gameBoard.switchPlayer(player2);
