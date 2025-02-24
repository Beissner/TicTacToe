import {Text, Pressable, StyleSheet, Animated, View } from 'react-native'
import React, { useEffect, useRef } from 'react'

interface SquareProps {
    value: string | null;
    handleOnPress: (v: string) => void;
    disabled: boolean;
}

export default function Square({ value, handleOnPress, disabled }: SquareProps) {

    const fadeAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        if (value) {
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 300, // 300ms fade-in effect
                useNativeDriver: true
            }).start();
        }
    }, [value]);

    return (
        
            <Pressable style={styles.container} onPress={() => handleOnPress('X')} disabled={disabled || value !== null}>
                <Animated.View style={{opacity: fadeAnim}}>
                    <Text>{value}</Text>
                </Animated.View>
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