import miniMax from "./miniMax";

export default function calculateOpponentTurn(board) {

  // calculate best move 
  const bestMove = miniMax(board, true);
  // console.log('best move: ', bestMove);

    // opponent isn't especially bright, choose random number
    // let guess = 4; // defaulting the opponents first guess always to 4 bc middle square is best position

    // // can only place in open spot
    // while (tiles[guess] !== null) {

    //     // guess again
    //     guess = Math.floor(Math.random() * 9);
    // }

  return bestMove.openIndex;
}