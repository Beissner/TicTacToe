import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

interface HeaderProps {
    title: string;
}

export default function Header({ title }: HeaderProps) {
  return (
    <View>
      <Text style={styles.header}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    header: {
        fontSize: 28,
        marginBottom: 40,
    }
  });
  
