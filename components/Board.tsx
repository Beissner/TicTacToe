import { View, Text, StyleSheet, Modal, Pressable } from "react-native";
import React, { useState, useEffect } from "react";

import Square from "./Square";
import { calculateOpponentTurn } from "../utils/calculateOpponentTurn";
import { calculateWinner } from "../utils/calculateWinner";
import { WinnerTypes } from "../types/tictactoetypes";

interface BoardProps {
  isUserFirst: boolean;
  setShowBoard: (val: boolean) => void;
  handleGameScore: (winner: WinnerTypes) => void;
}

export default function Board({
  isUserFirst,
  setShowBoard,
  handleGameScore,
}: BoardProps) {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [gameOverText, setGameOverText] = useState<string | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    // handle computer first move
    if (!isUserFirst && board.filter((t) => t === null).length === 9) {
      const boardCopy = board.slice();
      boardCopy[4] = "O";
      setBoard(boardCopy);
    }
  }, [isUserFirst, board]);

  const handleOnPressSquare = (index: number) => {
    // user turn
    const boardCopy = board.slice();
    boardCopy[index] = "X";
    setBoard(boardCopy);

    // check for game over
    const gameOver = checkGameOver(boardCopy);

    // if game isn't over handle opponent turn
    if (!gameOver) {
      const opponentMove = calculateOpponentTurn(boardCopy);
      boardCopy[opponentMove] = "O";
      setBoard(boardCopy);
      checkGameOver(boardCopy);
    }
  };

  const checkGameOver = (board: (string | null)[]) => {
    if (calculateWinner(board) == "X") {
      handleGameOver("You Won!!", WinnerTypes.human);
      return true;
    }

    if (!board.includes(null)) {
      handleGameOver("It's a tie!", WinnerTypes.tie);
      return true;
    }

    if (calculateWinner(board) === "O") {
      handleGameOver("You Lost :(", WinnerTypes.computer);
      return true;
    }

    return false;
  };

  // display game over modal
  const handleGameOver = (message: string, winner: WinnerTypes) => {
    setGameOver(true);
    setGameOverText(message);
    handleGameScore(winner);
  };

  // reset board
  const handleOnPlayAgainButton = () => {
    setModalVisible(!modalVisible);
    setBoard(Array(9).fill(null));
    setGameOverText(null);
    setShowBoard(false);
  };

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={gameOver}
        onRequestClose={() => {
          setGameOver(!gameOver);
        }}
      >
        <View style={styles.modalRoot}>
          <View style={styles.modal}>
            <Text style={styles.winText}>{gameOverText}</Text>
            <Pressable style={styles.button} onPress={handleOnPlayAgainButton}>
              <Text style={styles.buttonText}>Play Again</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <View style={styles.row}>
        <Square
          value={board[0]}
          handleOnPress={() => handleOnPressSquare(0)}
          disabled={gameOver}
        />
        <Square
          value={board[1]}
          handleOnPress={() => handleOnPressSquare(1)}
          disabled={gameOver}
        />
        <Square
          value={board[2]}
          handleOnPress={() => handleOnPressSquare(2)}
          disabled={gameOver}
        />
      </View>
      <View style={styles.row}>
        <Square
          value={board[3]}
          handleOnPress={() => handleOnPressSquare(3)}
          disabled={gameOver}
        />
        <Square
          value={board[4]}
          handleOnPress={() => handleOnPressSquare(4)}
          disabled={gameOver}
        />
        <Square
          value={board[5]}
          handleOnPress={() => handleOnPressSquare(5)}
          disabled={gameOver}
        />
      </View>
      <View style={styles.row}>
        <Square
          value={board[6]}
          handleOnPress={() => handleOnPressSquare(6)}
          disabled={gameOver}
        />
        <Square
          value={board[7]}
          handleOnPress={() => handleOnPressSquare(7)}
          disabled={gameOver}
        />
        <Square
          value={board[8]}
          handleOnPress={() => handleOnPressSquare(8)}
          disabled={gameOver}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
  },
  winText: {
    marginVertical: 30,
    fontSize: 24,
  },
  modalRoot: {
    flex: 1,
    marginTop: "45%",
    alignItems: "center",
  },
  modal: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 65,
    justifyContent: "flex-start",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    paddingHorizontal: 30,
    paddingVertical: 15,
    elevation: 2,
    backgroundColor: "#2196F3",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});
