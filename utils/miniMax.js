import { calculateWinner } from "./calculateWinner";
import { getAvailableSpots } from "./calculateOpponentTurn";

export function miniMax(board, depth, isMaximizing) {

    // check for terminal states (base case)
    const winner = calculateWinner(board);
   
    if (winner === 'O') return {score: 10 - depth}  // ai
    if (winner === 'X') return {score: -10 + depth} // human

    const availableSpots = getAvailableSpots(board);
    if (availableSpots.length === 0) return {score: 0}

    // no winner/loser/draw yet
    let bestMove = {};

    if (isMaximizing) {
        let bestScore = -Infinity;

        availableSpots.forEach((openIndex) => {
            board[openIndex] = 'O';
            let result = miniMax(board, depth+1, false);
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
            let result = miniMax(board, depth+1, true);
            board[openIndex] = null;
            if (result.score < bestScore) {
                bestScore = result.score;
                bestMove = { openIndex, score: bestScore};
            }
        });
        return bestMove;
    }
}

