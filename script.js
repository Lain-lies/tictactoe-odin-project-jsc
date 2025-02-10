

const gameBoard = (function (player) {  

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
        
        gameArea[i][j] = "X";
    }

    const updateDisplay = (button) => {
        
        button.textContent = "X";
    }

    return {
        init,
    };

})();


gameBoard.init();