import {Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'

interface SquareProps {
    value: string | null;
    handleOnPress: (v: string) => void;
    disabled: boolean;
}

export default function Square({ value, handleOnPress, disabled }: SquareProps) {

    return (
        <Pressable style={styles.container} onPress={() => handleOnPress('X')} disabled={disabled}>
        <Text>{value}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 80,
        width: 80,
        borderColor: '#000',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF',
       
    },
});