import { View, Text, StyleSheet, Button, Modal, Pressable } from 'react-native'
import React, { useState, useEffect } from 'react'

import Square from './Square'
import calculateOpponentTurn from '../utils/calculateOpponentTurn';
import calculateWinner from '../utils/calculateWinner';

interface BoardProps {
    isUserFirst: boolean;
    setShowBoard: (val: boolean) => void;
}

export default function Board({isUserFirst, setShowBoard}: BoardProps) {

    // local state
    const [tiles, setTiles] = useState(Array(9).fill(null));
    const [gameOver, setGameOver] = useState<boolean>(false);
    const [gameOverText, setGameOverText] = useState<string | null>(null);
    const [showPlayAgainButton, setShowPlayAgainButton] = useState<boolean>(false);
    const [isUserTurn, setIsUserTurn] = useState<boolean>(isUserFirst);
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        if (!isUserTurn) {
            const boardCopy = tiles.slice();
            opponentTurn(boardCopy);
        }
      }, [isUserTurn]);

    const handleOnPressSquare = (index: number) => {

        // update board with user turn
        const nextSquares = tiles.slice();  // creates a copy
        nextSquares[index] = "X";
        setTiles(nextSquares);

        // check for game over
        const noWinner = !(nextSquares.includes(null)); // draw results in no null values
        const userWins = calculateWinner(nextSquares) == 'X';
        
        if (userWins) {
            return handleGameOver('You Won!!');
        }
        
        if (noWinner) {
            return handleGameOver("It's a tie!");
        } 

       // if game isn't over handle opponent turn
       const updatedBoard = opponentTurn(nextSquares);

       const userLost = calculateWinner(updatedBoard) === 'O';
        if (userLost) {
            return handleGameOver('You Lost :(');
        }
        
    };

    const opponentTurn = (nextSquares: (string | null)[]) => {
      
         const opponentGuess = calculateOpponentTurn(nextSquares);
        
         // play opponent turn
         nextSquares[opponentGuess] = 'O';
         setTiles(nextSquares);
         return nextSquares;
    }

    const handleGameOver = (message: string) => {
        setGameOver(true);
        setShowPlayAgainButton(true);
        setGameOverText(message);
    }

    const handleOnPlayAgainButton = () => {
        setModalVisible(!modalVisible)

        // reset board
         setTiles(Array(9).fill(null));
         setGameOverText(null);
         setShowPlayAgainButton(false);
         setShowBoard(false);
    }

  return (
    <View style={styles.container}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={gameOver}
          onRequestClose={() => {setGameOver(!gameOver);
          }}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.winText}>{gameOverText}</Text>
                    <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={handleOnPlayAgainButton}>
                        <Text style={styles.buttonTextStyle}>Play Again</Text>
                    </Pressable>
                </View>
                
            </View>
          </Modal>
        <View style={styles.row}>
            <Square value={tiles[0]} handleOnPress={() => handleOnPressSquare(0)} disabled={gameOver}/>
            <Square value={tiles[1]} handleOnPress={() => handleOnPressSquare(1)} disabled={gameOver}/>
            <Square value={tiles[2]} handleOnPress={() => handleOnPressSquare(2)} disabled={gameOver}/>
        </View>
        <View style={styles.row}>
            <Square value={tiles[3]} handleOnPress={() => handleOnPressSquare(3)} disabled={gameOver}/>
            <Square value={tiles[4]} handleOnPress={() => handleOnPressSquare(4)} disabled={gameOver}/>
            <Square value={tiles[5]} handleOnPress={() => handleOnPressSquare(5)} disabled={gameOver}/>
        </View>
        <View style={styles.row}>
            <Square value={tiles[6]} handleOnPress={() => handleOnPressSquare(6)} disabled={gameOver}/>
            <Square value={tiles[7]} handleOnPress={() => handleOnPressSquare(7)} disabled={gameOver}/>
            <Square value={tiles[8]} handleOnPress={() => handleOnPressSquare(8)} disabled={gameOver}/>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    row: {
        flexDirection: 'row',
    },
      winText: {
        marginVertical: 30,
        fontSize: 24,
      },
      centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        paddingVertical: 70,
        paddingHorizontal: 65,
        alignItems: 'center',
        shadowColor: '#000',
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
      },
      buttonClose: {
        backgroundColor: '#2196F3',
      },
      buttonTextStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
      },
      
});