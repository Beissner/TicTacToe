import { miniMax } from '../utils/miniMax';

test('AI should win when possible', () => {
    const board = ['O', 'O', null, 'X', 'X', null, null, null, null];
    const bestMove = miniMax(board, 0, true);
    expect(bestMove.openIndex).toBe(2); // AI should take the winning move
  });

test('AI should block opponent from winning', () => {
    const board = ['X', 'X', null, 'O', null, null, null, null, null];
    const bestMove = miniMax(board, 0, true);
    expect(bestMove.openIndex).toBe(2); // AI should block the win
  });

test('AI should pick the best strategic move', () => {
    const board = ['O', 'X', 'O', null, 'X', null, null, null, null];
    const bestMove = miniMax(board, 0, true);
    expect(bestMove.openIndex).toBe(7); // AI should take the best option
  });