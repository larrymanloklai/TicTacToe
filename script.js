// 1 gamePlayer object constructor
// Players: Each player should have a name and a mark (either 'X' or 'O').
function gamePlayer(name, mark) {
    this.name = name;
    this.mark = mark;
}

// 2 gameBoard: It needs to be represented as an array and should be able to reset.
// Manage the state of the gameBoard.
const gameBoard = (function () {
    let board = Array(9).fill('');

    const setField = (index, mark) => {
        if (index >= 0 && index < board.length && board[index] === '') {
            board[index] = mark;
            return true;
        }
        return false;
    };

    const getField = (index) => {
        return board[index];
    };

    const resetBoard = () => {
        board = Array(9).fill('');
    };

    const getBoard = () => {
        return board;
    };

    return { setField, getField, resetBoard, getBoard };
})();

// 3 displayController Manage game flow, check for a winner, handle player turns, and update the game status.

const displayController = (function () {
    const gameBoardElement = document.getElementById('gameBoard');
    const gameStatusElement = document.getElementById('gameStatus');
    const startButton = document.getElementById('startButton');
    const restartButton = document.getElementById('restartButton');

    const drawBoard = () => {
        gameBoardElement.innerHTML = gameBoard.getBoard().map((mark, index) => `
            <div class="book" data-index="${index}">${mark}</div>
        `).join('');
    };

    const updateGameStatus = (message) => {
        gameStatusElement.textContent = message;
    };

    startButton.addEventListener('click', () => {
        const gamePlayerOneName = document.getElementById('player1').value || 'Player 1';
        const gamePlayerTwoName = document.getElementById('player2').value || 'Player 2';
        gameController.startGame(gamePlayerOneName, gamePlayerTwoName);
    });

    restartButton.addEventListener('click', () => {
        const gamePlayerOneName = document.getElementById('player1').value || 'Player 1';
        const gamePlayerTwoName = document.getElementById('player2').value || 'Player 2';
        gameController.startGame(gamePlayerOneName, gamePlayerTwoName);
    });

    gameBoardElement.addEventListener('click', (e) => {
        if (e.target.matches('.book')) {
            const index = parseInt(e.target.dataset.index, 10);
            gameController.inGame(index);
        }
    });

    return { drawBoard, updateGameStatus };
})();

// 4 gameController
const gameController = (function () {
    let gamePlayers = [];
    let currentPlayerIndex = 0;
    let gameOver = false;

    const startGame = (gamePlayerOneName, gamePlayerTwoName) => {
        gamePlayers = [new gamePlayer(gamePlayerOneName, 'X'), new gamePlayer(gamePlayerTwoName, 'O')];
        currentPlayerIndex = 0;
        gameOver = false;
        gameBoard.resetBoard();
        displayController.drawBoard();
        displayController.updateGameStatus(`It's ${gamePlayers[currentPlayerIndex].name}'s turn to mark '${gamePlayers[currentPlayerIndex].mark}'.`);
    };

    const inGame = (index) => {
        if (!gameOver && gameBoard.setField(index, gamePlayers[currentPlayerIndex].mark)) {
            displayController.drawBoard();
            if (finishGame()) {
                gameOver = true;
                displayController.updateGameStatus(`${gamePlayers[currentPlayerIndex].name} wins!`);
            } else if (gameBoard.getBoard().every(field => field !== '')) {
                gameOver = true;
                displayController.updateGameStatus("It's a tie!");
            } else {
                currentPlayerIndex = (currentPlayerIndex + 1) % 2;
                displayController.updateGameStatus(`${gamePlayers[currentPlayerIndex].name}'s turn`);
            }
        }
    };

    const finishGame = () => {
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

    return { startGame, inGame, finishGame };
})();

// Initialize game setup
function initializeGame() {
    gameController.startGame()
    displayController.drawBoard();
}

// Call the setup function to initialize the game
initializeGame();
