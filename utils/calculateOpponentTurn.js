import { miniMax } from "./miniMax";

// calculates best move for ai and returns position index
export function calculateOpponentTurn(board) {

  // calculate best move 
  const bestMove = miniMax(board, true);
  
  return bestMove.openIndex;
}

// calculates open positions on board
export function getAvailableSpots (board) {
  const availableSpots = [];

  board.forEach((val, index) => {
      if (val === null) {
          availableSpots.push(index);
      };
  });

  return availableSpots;
}