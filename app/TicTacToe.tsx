import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import Board from "../components/Board";
import Header from "../components/Header";
import Instructions from "../components/Instructions";
import Scoreboard from "../components/Scoreboard";
import { ScoreType, WinnerTypes } from "../types/tictactoetypes";

export default function TicTacToe() {
  const [isUserFirst, setIsUserFirst] = useState<boolean>(true);
  const [showBoard, setShowBoard] = useState<boolean>(false);
  const [score, setScore] = useState<ScoreType>({
    computerScore: 0,
    humanScore: 0,
    tiesScore: 0,
  });

  const handleOnPressStartButton = () => {
    setShowBoard(true);
  };

  const handleGameScore = (winner: WinnerTypes) => {
    setScore((prev) => ({
      computerScore:
        winner === WinnerTypes.computer
          ? prev.computerScore + 1
          : prev.computerScore,
      humanScore:
        winner === WinnerTypes.human ? prev.humanScore + 1 : prev.humanScore,
      tiesScore:
        winner === WinnerTypes.tie ? prev.tiesScore + 1 : prev.tiesScore,
    }));
  };

  return (
    <View style={styles.container}>
      <Header title={"Tic Tac Toe"} />
      <Scoreboard score={score} />
      {!showBoard && (
        <Instructions
          isUserFirst={isUserFirst}
          setIsUserFirst={setIsUserFirst}
          handleOnPressButton={handleOnPressStartButton}
        />
      )}
      {showBoard && (
        <Board
          isUserFirst={isUserFirst}
          setShowBoard={setShowBoard}
          handleGameScore={handleGameScore}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});
