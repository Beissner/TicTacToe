# Tic Tac Toe - Unbeatable AI

## Game Overview
This app is a classic game of Tic Tac Toe built with React Native and Expo. The game features an unbeatable AI opponent using the Minimax algorithm, making it impossible for the human player to win.

## Features
- 3x3 game grid
- option for player or computer to have first turn
- game ends only in a loss or tie (player cannot beat AI)
- player can start a new game once the last one is complete

## Framework and Tools Used
- React Native: Framework for building cross-platform mobile apps
- Expo: Open-source framework for developing React Native apps
- Typescript: For static typing
- Jest/React Native Testing Library: JavaScript testing framework

## Project Structure
> The project root is in `TicTacToe.tsx` in the `/app` folder. Components, tests and utility functions each have their own folders.

## Run the Project
> To run the app on your machine you need to first setup your environment, clone this repository and install dependencies

1. Setup Environment

- Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions "Creating a new application" step, before proceeding.
- Install Expo CLI
`npm install -g expo-cli`

2. Clone the Repository
`git clone https://github.com/your-repo/tic-tac-toe.git
cd tic-tac-toe`

3. Install Dependencies
> Navigate to the project folder and install project dependencies
   ```bash
   npm install
   ```

3. Start the App
> To start the Expo development server, run:
   ```bash
    npx expo start
   ```
> This will open the Expo Developer Tools in your browser. You can scan the QR code using the Expo Go app on your mobile device or run it on an emulator.

## Running Tests
> Automated tests are located in the __tests__ folder. To run the test suite:
`npm test`

## Technical Details
### Minimax Algorithm
>The AI utilizes the Minimax algorithm to make optimal moves. It evaluates every possible move and assigns scores based on potential outcomes:
- +10 for an AI win
- -10 for a player win
- 0 for a tie

> The AI chooses the move that maximizes its score and minimizes the player's advantage.