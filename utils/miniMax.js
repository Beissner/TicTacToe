import calculateWinner from "./calculateWinner";

export default function miniMax(board, isMaximizing) {

    
    const winner = calculateWinner(board);
    // check for terminal states
    if (winner === 'X') return {score: -10}

    if (winner === 'O') return {score: +10}

    const availableSpots = getAvailableSpots(board);
    if (availableSpots.length === 0) return {score: 0}

    // if we reach this point means no winner/loser/draw yet
    let bestMove = {};

    if (isMaximizing) {
        let bestScore = -Infinity;

        // iterate over open spots
        availableSpots.forEach((openIndex) => {
            // play spot
            board[openIndex] = 'O';
            // play this version of board 
            let result = miniMax(board, false);
            // reset
            board[openIndex] = null;

            if (result.score > bestScore) {
                bestScore = result.score;
                bestMove = { openIndex, score: bestScore};
            }
        });
        return bestMove;
    } else {
        let bestScore = Infinity;

        availableSpots.forEach((openIndex) => {
            board[openIndex] = 'X';
            let result = miniMax(board, true);
            board[openIndex] = null;
            if (result.score < bestScore) {
                bestScore = result.score;
                bestMove = { openIndex, score: bestScore};
            }
        });
        return bestMove;
    }
}

function getAvailableSpots (board) {
    const availableSpots = [];

    board.forEach((val, index) => {
        if (val === null) {
            availableSpots.push(index);
        };
    });

    return availableSpots;
}