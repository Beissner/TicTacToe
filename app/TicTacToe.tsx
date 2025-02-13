import React, { useState } from "react";
import { StyleSheet, View, Text} from 'react-native';

import Board from "../components/Board";
import Header from '../components/Header';
import Instructions from "@/components/Instructions";

export default function TicTacToe() {

    const [isUserFirst, setIsUserFirst] = useState<boolean>(true);
    const [showBoard, setShowBoard] = useState<boolean>(false);
    
    const handleOnPressButton = () => {
        setShowBoard(true);
    }

    return (
    <View style={styles.container}>
        <Header title={"Tic Tac Toe"}/>
        {!showBoard && <Instructions isUserFirst={isUserFirst} setIsUserFirst={setIsUserFirst} handleOnPressButton={handleOnPressButton}/>}
        {showBoard && <Board isUserFirst={isUserFirst} setShowBoard={setShowBoard}/>}
    </View>
    );

}

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
    }, 
  });
  