import { calculateWinner } from "./calculateWinner";
import { getAvailableSpots } from "./calculateOpponentTurn";

export function miniMax(board, isMaximizing) {

    // check for terminal states (base case)
    const winner = calculateWinner(board);
   
    if (winner === 'O') return {score: 10}  // ai
    if (winner === 'X') return {score: -10} // human

    const availableSpots = getAvailableSpots(board);
    if (availableSpots.length === 0) return {score: 0}

    // no winner/loser/draw yet
    let bestMove = {};

    if (isMaximizing) {
        let bestScore = -Infinity;

        availableSpots.forEach((openIndex) => {
            board[openIndex] = 'O';
            let result = miniMax(board, false);
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

