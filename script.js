//there are 3 objects in this script: gamePlayer, gameController, gameBoard

// gamePlayer object constructor
function gamePlayer(name, mark) {
    this.name = name
    this.mark = mark;
}

const gameController = (function() {
    let gamePlayers = [];
    let currentPlayerIndex = 0;
    let gameOver = false;

    function startGame () {
        //action following start game button toggled

        gameBoard.resetBoard();

    }
    const inGame () {
        //action follow each move
    }
    const finishGame () {
        //action when game is finished
    }
    return {starGame, inGame, finishGame}
})();

const gameBoard = (function() {



    function setField () {
        //set the 
    }
    function getField () {
        //get to know which field played
    }
    function resetBoard () {
        //reset board ready for a new game
    }
    function getBoard () {
        //get the latest status of board
    }

return {setField, getField, resetBoard, getBoard}
})();

const displayController = (function() {
    //doesn't need to return anything, just wrapping bunch of functions
    startButton.addEventListener

    restartButton.addEventListener

    gameBoardElement.addEventListener

    drawBoard
     ga

    updateGameStatus

    return {drawBoard, updateGameStatus}

})();

//initial game
displayController.drawBoard();