//there are 4 objects in this script: 1 gamePlayer, 2 gameController, 3 gameBoard, 4 displayControl

// 1 gamePlayer object constructor
// Players: Each player should have a name and a mark (either 'X' or 'O').
function gamePlayer(name, mark) {
    this.name = name
    this.mark = mark;
}

// 2 gameController
const gameController = (function() {
    let gamePlayers = [];
    let currentPlayerIndex = 0;
    let gameOver = false;

    const startGame (gamePlayerOneName, gamePlayerTwoName) {
        gamePlayers = [gamePlayer(gamePlayerOneName, 'X'), gamePlayer(gamePlayerTwoName, 'O')];
        currentPlayerIndex = 0;
        gameOver = false;
        gameBoard.resetBoard();
        displayController.drawBoard();
        displayController.updateGameStatus(`It's ${gamePlayers[currentPlayerIndex].name}'s turn to mark '${gamePlayers[currentPlayerIndex].mark}'.`);
    }

    const inGame () {

    }
    const checkWinner = function () {
        const winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

        for (let combination of winningCombinations) {
            const a = combination[0];
            const b = combination[1];
            const c = combination[2];

            const markA = gameBoard.getField(a);
            const markB = gameBoard.getField(b);
            const markC = gameBoard.getField(c);

            if (markA && markA === markB && markB === markC) {
                return true;
            }
        }
        return false;
    };
    return {starGame, inGame, finishGame}
})();

// 3 gameBoard: It needs to be represented as an array and should be able to reset.
// Manage the state of the gameBoard.
const gameBoard = (function() {
    
    //declare the board to ''
    let board = Array(9).fill('');
    
    //Updates the board with x or o (index) if the position is empty.
    const setField (index, mark) {
        if (index >= 0 && index < board.length && board[index] === '') {
            board[index] = mark;
            return true;
        }
        return false;
    };

    //getField(index): Returns the value at a specific index.
    const getField (index) {
        return board[index];
    };

    //resetBoard(): Clears the board for a new game.
    const resetBoard () {
        board = Array(9).fill('');
    };

    //getBoard(): Returns the current state of the board.
    const getBoard () {
        return board;
    };

    return { setField, getField, resetBoard, getBoard }
})();

//4 displayController Manage game flow, check for a winner, handle player turns, and update the game status.

const displayController = (function() {
    //doesn't need to return anything, just wrapping bunch of functions
    const gameStatusElement =document.getElementById('gameStatus')



    startButton.addEventListener

    restartButton.addEventListener

    gameBoardElement.addEventListener

    drawBoard
     ga

    const updateGameStatus (message) {
        gameStatusElement.textContent = message;
    }

    return {drawBoard, updateGameStatus}

})();

//initial game
displayController.drawBoard();