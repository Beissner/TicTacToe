import { View, Text, StyleSheet, Button } from 'react-native'
import React, {useState} from 'react'
import Checkbox from 'expo-checkbox';

interface InstructionsProps {
    handleOnPressButton: (val: boolean) => void;
    isUserFirst: boolean;
    setIsUserFirst: (val: boolean) => void;
}
export default function Instructions({handleOnPressButton, isUserFirst, setIsUserFirst}: InstructionsProps) {
    const INSTRUCTIONS = "To start a game select who takes the first turn";

    

  return (
    <View>
      <Text>{INSTRUCTIONS}</Text>
      <View style={styles.section}>
        <Checkbox style={styles.checkbox} value={isUserFirst} onValueChange={() => setIsUserFirst(true)} />
        <Text style={styles.paragraph}>Me</Text>
      </View>
      <View style={styles.section}>
        <Checkbox style={styles.checkbox} value={!isUserFirst} onValueChange={() => setIsUserFirst(false)} />
        <Text style={styles.paragraph}>Computer</Text>
      </View>
      <View style={styles.startButton}>
        <Button
                onPress={() => handleOnPressButton(isUserFirst)}
                disabled={isUserFirst === undefined}
                title={"Start Game"}
                color="#000"
            />
      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginHorizontal: 16,
      marginVertical: 32,
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    paragraph: {
        fontSize: 15,
      },
    checkbox: {
      margin: 8,
    },
    startButton: {
        marginTop: 20,
        borderWidth: 0.5,
        borderRadius: 10,
        borderColor: 'green',
        marginBottom: 10,
      }, 
  });