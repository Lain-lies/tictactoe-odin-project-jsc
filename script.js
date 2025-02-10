

const gameBoard = (function (player) {  

    const gameArea = [

        ["|", "|", "|"],
        ["|", "|", "|"],
        ["|", "|", "|"]
        
    ];
    
    const init = () => {

        fetchDOM();
    };

    const fetchDOM  = () => {
        
        const gameBoard = document.querySelector("#gameboard");
        const row = [...gameBoard.children];
        this.buttons = [

            [...row[0].children],
            [...row[1].children],
            [...row[2].children],

        ];

    };
    
    const show = () => {

        console.log(this.buttons);
    }

    return {
        init,
        show
    };

})();
