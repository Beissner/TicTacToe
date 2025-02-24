export interface ScoreType {
    humanScore: number;
    computerScore: number;
    tiesScore: number;
} 

export enum WinnerTypes {
    human = 'HUMAN',
    computer = 'COMPUTER',
    tie = 'TIE'
  }