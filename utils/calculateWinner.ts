// calculates if user or computer won
// returns 'X' if user is winner
// returns 'O' if computer is winner
// returns null for no win
export function calculateWinner(tiles: (string|null)[]) {
    const possibleWinCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
      
    for (let i = 0; i < possibleWinCombos.length; i++) {
        const [a, b, c] = possibleWinCombos[i];
        // check if the current tiles match a winning combination
        if (tiles[a] === 'X' && tiles[a] === tiles[b] && tiles[a] === tiles[c]) {
            return tiles[a];
        }
        if (tiles[a] === 'O' && tiles[a] === tiles[b] && tiles[a] === tiles[c]) {
            return tiles[a];
        }
    }
    
    return null;
}