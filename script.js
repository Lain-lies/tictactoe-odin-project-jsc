

const game = (function () {  

    const init = () => {

        fetchDOM();
        bind();
        showModule();
        testPlay();
    };

    const createPlayer = function(name, mark){
        
        return{name, mark};

    };

    const player = [];

    const register = (name, mark) => {
        
        if(player.length == 2){
            
            alert("Exceeded Max Players");
            return;
        }
        
        player.push(createPlayer(name, mark));
        console.log("Added player Successfully");
        console.log(player);
        
    };

    const gameArea = [

        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
        
    ]
       
    const fetchDOM  = () => {

        this.body = document.querySelector("body");
        this.gameBoard = document.querySelector("#gameboard");
        const row = [...this.gameBoard.children];
        this.buttonArray = [

            [...row[0].children],
            [...row[1].children],
            [...row[2].children],

        ];

        console.log(this.buttonArray);

    }

    const showModule = () => {
        
        this.body.appendChild(this.gameBoard);

    }

    const hideModule = () => {
        
        this.body.removeChild(this.gameBoard);
        
    }

    const switchPlayer = () => {
        
        this.currentPlayer = 1 - this.currentPlayer;
        
    }
    
    const bind = () => {
        
        this.buttonArray.forEach(buttonRow => {
            buttonRow.forEach(button => {
                button.addEventListener("click", playerClick);
            });
        });
    }

    const playerClick = (e) => {
        
        if(e.target.textContent !== "") return;

        const [i , j] = findButtonIndex(e.target);
        updateDisplay(e.target);
        updateGameArea(i, j);
        console.table(gameArea);
        switchPlayer();
        determineWinner();

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
        
        gameArea[i][j] = player[this.currentPlayer].mark;
    }

    const updateDisplay = (button) => {
        
        button.textContent = player[this.currentPlayer].mark;
    }

    const determineWinner = () => {
        
        let winner;
        winner = checkHorizontal();
        if(winner){
            
            gameFinishHandler(winner);
        }

        winner = checkVertical();
        if(winner){

            gameFinishHandler(winner);
        }
    }

    const gameFinishHandler = (winner) => {

        alert(`The Winner is ${winner}`);
        hideModule();
        control.showModule();
        restartGame();    
        console.log(gameArea);

    }

    const checkHorizontal = () => {

        let player1 = 0;
        let player2 = 0;

        for(let i = 0; i < gameArea.length; i++){
            
            player1 = 0;
            player2 = 0;

            for(let j = 0; j < gameArea.length; j++){
                
                if(gameArea[i][j] === player[0].mark){

                    player1++;

                }else if(gameArea[i][j] === player[1].mark){

                    player2++;
                }

            }
            
            if(player1 === 3){

                return player[0].name;

            }else if(player2 === 3){

                return player[1].name;
            }
        }
        
    }

    const checkVertical = () => {

        let player1 = 0;
        let player2 = 0;

        for(let j = 0; j < gameArea.length; j++){

            player1 = 0;
            player2 = 0;
            
            for(let i = 0; i < gameArea.length; i++){
                
                if(gameArea[i][j] === player[0].mark){

                    player1++;

                }else if(gameArea[i][j] === player[1].mark){

                    player2++;
                }
            }

            if(player1 === 3){
                
                return player[0].name;
                
            }else if(player2 === 3){

                return player[1].name;
            }
        }
    }   

    const testPlay = () => {
        
        register("ken", ":)");
        register("lain", ":X");
        
        this.currentPlayer = 0;
        
    }

    const restartGame = () => {
        
        console.log("restart 3gerred")
        this.buttonArray.forEach(buttonRow => {
            buttonRow.forEach(button => {
                button.textContent = "";
            });
        });

        for(let i = 0; i < gameArea.length; i++){
            for(let j = 0; j < gameArea.length; j++){
                
                gameArea[i][j] = "";
            }
        }

        this.currentPlayer = 0;

        console.table(gameArea);
    }

    return {

        init,
        hideModule,
        showModule,
    };

})();

const control = (function() {

    const init = () => {
        
        fetchDOM();
        bind();
    }

    const fetchDOM  = () => {
    
        this.body = document.querySelector("body");
        this.control = document.querySelector("#control");
        this.button = document.querySelector("#control > button")       

        console.log(this.control);
        console.log(this.button);

    };

    const bind = () => {
        
        this.button.addEventListener("click",startClick);
        
    }

    const startClick = () => {

        game.showModule();
        hideModule();
        
    }

    const showModule = () => {
        
        this.body.appendChild(this.control);
    }

    const hideModule = () => {
        
        this.body.removeChild(this.control);        
    }
    
    
    return{
        
        init,
        showModule,
        hideModule,

    }

})();

game.init();
control.init();
game.hideModule();
