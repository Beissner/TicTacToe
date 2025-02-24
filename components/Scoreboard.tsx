import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScoreType } from '../types/tictactoetypes';

interface ScoreBoard {
    score: ScoreType,
}
export default function Scoreboard({score}: ScoreBoard) {
  return (
    <View style={styles.scoreboardContainer}>
        <Text style={styles.title}>Scoreboard</Text>
     <View style={styles.row}>
        <Text style={styles.scoreText}>{`Human: ${score.humanScore}`}</Text>
        <Text style={styles.scoreText}>{`Computer: ${score.computerScore}`}</Text>
        <Text style={styles.scoreText}>{`Ties: ${score.tiesScore}`}</Text>
     </View>
     
    </View>
  )
}

const styles = StyleSheet.create({
    scoreboardContainer: {
        marginVertical: 35,
        borderWidth: 1,
        borderColor: '#2196F3',
        borderRadius: 20,
        paddingTop: 25,
        paddingBottom: 35,
        paddingHorizontal: 35,
    },
    title: {
        marginBottom: 25,
        fontSize: 18,
        alignSelf: 'center',
        fontWeight: '800',
    },
    row: {
        flexDirection: 'row',
    },
    scoreText: {
        marginHorizontal: 10,
    }
});