import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import Checkbox from "expo-checkbox";

interface InstructionsProps {
  handleOnPressButton: (val: boolean) => void;
  isUserFirst: boolean;
  setIsUserFirst: (val: boolean) => void;
}

export default function Instructions({
  handleOnPressButton,
  isUserFirst,
  setIsUserFirst,
}: InstructionsProps) {
  const INSTRUCTIONS = "To start a game select who takes the first turn";

  return (
    <View>
      <Text>{INSTRUCTIONS}</Text>
      <View style={styles.section}>
        <Checkbox
          style={styles.checkbox}
          value={isUserFirst}
          onValueChange={() => setIsUserFirst(true)}
        />
        <Text style={styles.paragraph}>Me</Text>
      </View>
      <View style={styles.section}>
        <Checkbox
          style={styles.checkbox}
          value={!isUserFirst}
          onValueChange={() => setIsUserFirst(false)}
        />
        <Text style={styles.paragraph}>Computer</Text>
      </View>
      <Pressable
        style={styles.startButton}
        onPress={() => handleOnPressButton(isUserFirst)}
      >
        <Text style={styles.buttonText}>Start Game</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
    marginVertical: 32,
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
  },
  paragraph: {
    fontSize: 15,
  },
  checkbox: {
    margin: 8,
  },
  startButton: {
    marginTop: 35,
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
